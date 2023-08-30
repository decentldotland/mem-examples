export function handle(state, action) {
  const input = action.input;
  const posts = state.posts || [];

  if (input.function === "createPost") {
    /**
     * @param {object} pid - Post ID.
     * @param {string} author - Author (ETH address).
     * @param {string} title - Post title.
     * @param {string} description - Post description.
     * @param {string} content - Post content/markdown.
     * @param {string[]} categories - RSS supported categories strings.
     */

    posts.push({
      pid: SmartWeave.transaction.id,
      author: input.data.author,
      title: input.data.title,
      description: input.data.description,
      content: input.data.content,
      categories: input.data.categories
    });

    return { state: { ...state, posts } };
  }

  if (input.function === "updatePost") {
    /**
     * @param {string} pid - Post id.
     * @param {object} post - Updated post data.
     * @param {string} author - Author (ETH Address)
     * @param {string} title - Updated post title.
     * @param {string} description - Updated post description.
     * @param {string} content - Updated post content/markdown.
     * @param {string[]} categories - Updated RSS supported categories strings.
     */

    const updatedPosts = posts.map(post => {
      if (post.pid.toString() === input.pid) {
        if (post.author !== input.data.author) {
          throw new ContractError("Only post owner can update post");
        }
        return {
          ...post,
          author: post.author,
          title: input.data.title || post.title,
          description: input.data.description || post.description,
          content: input.data.content || post.content,
          categories: input.data.categories || post.categories
        };
      }
      return post;
    });

    return { state: { ...state, posts: updatedPosts } };

  }

  if (input.function === "removePost") {
    /**
          * @param {string} pid - Post id to be removed.
          * @param {string} author - Author (ETH Address)
          */
    const postIndex = posts.findIndex(post => post.pid.toString() === input.data.pid);
    if (postIndex === -1) {
      throw new ContractError("Post not found");
    }
    if (posts[postIndex].author !== input.data.author) {
      throw new ContractError("Only post owner can remove post");
    }

    const updatedPosts = posts.slice(0, postIndex).concat(posts.slice(postIndex + 1));

    return { state: { ...state, posts: updatedPosts } };
  }

  if (input.function === "getPosts") {
    return { state: posts };
  }

  return { state };
};