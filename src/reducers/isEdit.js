const isEdit = (state = { edit: false }, action) => {
  switch (action.type) {
    case "TOGGLE_EDIT":
      return { edit: true, index: action.index };
    default:
      return state;
  }
};
export default isEdit;
