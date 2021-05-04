const initialValue = { items: [] };
const itemList = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newArr = [...state.items, action.item];

      return {
        ...state,
        items: newArr,
      };
    }
    case "GET_ITEM": {
      return { items: action.item };
    }
    case "EDIT_ITEM": {
      const newArr = [
        ...state.items.slice(0, action.index),
        action.item,
        ...state.items.slice(action.index + 1),
      ];
      console.log(newArr);
      return {
        ...state,
        items: newArr,
      };
    }
    case "DELETE_ITEM": {
      const newArr = [
        ...state.items.slice(0, action.index),
        ...state.items.slice(action.index + 1),
      ];
      return {
        ...state,
        items: newArr,
      };
    }

    default:
      return state;
  }
};
export default itemList;
