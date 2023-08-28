export async function handle(state, action) {
  const input = action.input;

  if (input.function === "generate") {
      const user = `anon#${_getStupidRandomInteger()}`;
      const data = await EXM.deterministicFetch(state.endpoint);
      const json = data.asJSON()

      state.haikus.push({ user: user, haiku: json.join(" ") });
  
      return { state };
  }

  function _getStupidRandomInteger() {
      return Math.floor(Math.random() * (1000 - 1)) + 1;
  }
}