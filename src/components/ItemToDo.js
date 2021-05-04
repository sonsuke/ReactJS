import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postData } from "../callAPI/getItem";
import check from "./check.svg";
import uncheck from "./uncheck.svg";
import { API_MOCK } from "../constants/const";
import { editItem, deleteItem, toggleEdit } from "../actions";

function ItemToDo(props) {
  const dispatch = useDispatch();
  const initialValue = props.item.title;
  const itemList = useSelector((state) => state.ItemList);

  const [value, setValue] = useState(initialValue);
  const toggleCheck = () => {
    const data = {
      ...props.item,
      isCompleted: !props.item.isCompleted,
    };
    postData(API_MOCK + "/" + props.item.ID, data, "PUT").then((data) =>
      dispatch(editItem(data, props.index))
    );
  };

  const handleDelete = () => {
    postData(API_MOCK + "/" + props.item.ID, {}, "DELETE").then((data) => {
      dispatch(deleteItem(props.index));
    });
  };

  const toggleEditState = () => {
    dispatch(toggleEdit(props.index));
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value === "") {
        handleDelete();
        dispatch(toggleEdit());
      } else {
        const data = {
          ...itemList.items[props.item.ID],
          title: e.target.value,
        };
        postData(API_MOCK + "/" + props.item.ID, data, "PUT").then((data) => {
          dispatch(editItem(data, props.index));
          dispatch(toggleEdit());
        });
      }
    }
  };
  return (
    <>
      <li className="todo-item">
        {props.isEdit ? (
          <input
            value={value}
            onChange={onChange}
            className="todo__input--edit"
            type="text"
            onKeyDown={onKeyDown}
            autoFocus
          />
        ) : (
          <>
            <img
              className="todo_icon"
              src={props.item.isCompleted ? check : uncheck}
              alt={props.item.title}
              onClick={toggleCheck}
            />
            <span onDoubleClick={toggleEditState}>{props.item.title}</span>
            <i onClick={handleDelete} className="fas fa-times delete"></i>
          </>
        )}
      </li>
    </>
  );
}

export default ItemToDo;
