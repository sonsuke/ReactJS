import React from "react";

import "./Todo.css";
import InputAddItem from "./InputAddItem";
import ListToDo from "./ListToDo";
import ToDoMenu from "./ToDoMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function ToDo(props) {
  return (
    <Router>
      <div className="wrap-todo">
        <div className="todo">
          <InputAddItem />
          <ListToDo />
          <ToDoMenu />
        </div>
      </div>
    </Router>
  );
}

export default ToDo;
