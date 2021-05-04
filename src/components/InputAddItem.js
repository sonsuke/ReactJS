import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, inputSearch } from "../actions";
import { postData } from "../callAPI/getItem";

import { toggleSearch } from "../actions/index";
import { API_MOCK } from "../constants/const";

function InputAddItem(props) {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.searchState);

  const onKeyDown = (e) => {
    if (searchState === false) {
      const valueInput = e.target.value;
      if (e.keyCode === 13) {
        if (valueInput) {
          const object = {
            title: valueInput,
            isCompleted: false,
          };
          e.target.value = "";
          postData(API_MOCK, object)
            .then((res) => {
              dispatch(addItem(res));
            })
            .catch((err) => {});
        } else {
          alert("Mời nhập!!!");
        }
      }
    }
  };

  const onChange = (e) => {
    if (searchState) dispatch(inputSearch(e.target.value));
  };

  const toggleSearchState = () => {
    dispatch(toggleSearch());
  };
  return (
    <div className="todo--input">
      <i className="fas fa-chevron-down"></i>
      <input
        onKeyDown={onKeyDown}
        onChange={onChange}
        type="text"
        placeholder={searchState ? "Search" : "What need to be done ?"}
        autoFocus
      />
      <i className="fas fa-search todo__search" onClick={toggleSearchState}></i>
    </div>
  );
}

export default InputAddItem;
