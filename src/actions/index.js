export const increment = () => {
  return { type: "INCREMENT" };
};
export const logged = () => {
  return { type: "SING_IN" };
};

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    item: item,
  };
};
export const getItem = (item) => {
  return {
    type: "GET_ITEM",
    item: item,
  };
};

export const editItem = (item, index) => {
  return {
    type: "EDIT_ITEM",
    item: item,
    index,
  };
};
export const deleteItem = (index) => {
  return {
    type: "DELETE_ITEM",
    index,
  };
};

export const toggleSearch = () => {
  return {
    type: "TOGGLE_SEARCH",
  };
};

export const inputSearch = (value) => {
  return {
    type: "INPUT_SEARCH",
    value,
  };
};

export const toggleEditItem = () => {
  return {
    type: "TOGGLE_INPUT",
  };
};
export const toggleEdit = (index) => {
  return {
    type: "TOGGLE_EDIT",
    index,
  };
};
