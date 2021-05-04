import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function ToDoMenu(props) {
  const history = useHistory();
  const itemList = useSelector((state) => state.ItemList);
  let d = 0;
  itemList.items.forEach((item) => {
    if (item.isCompleted === false) return d++;
  });
  return (
    <div className="todo__menu">
      <span className="todo__menu--state">{d} item left</span>
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
    </div>
  );
}

export default ToDoMenu;
