const querySearch = (state = "", action) => {
  switch (action.type) {
    case "INPUT_SEARCH":
      return action.value;

    default:
      return state;
  }
};
export default querySearch;
