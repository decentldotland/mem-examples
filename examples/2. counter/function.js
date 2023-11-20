export async function handle(state, action) {
  const input = action.input;

  if (input.function === "increment") {
    state.count += 1;
    return { state };
  }
  if (input.function === "decrement") {
    state.count -= 1;
    return { state };
  }
}