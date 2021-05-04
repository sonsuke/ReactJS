import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../callAPI/getItem";

import { getItem } from "../actions";
import ItemToDo from "./ItemToDo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ListToDo(props) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const itemList = useSelector((state) => state.ItemList);
  const isEdit = useSelector((state) => state.isEdit);

  useEffect(() => {
    fetchData().then((data) => dispatch(getItem(data)));
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ul className="todo-list">
            {itemList.items
              .filter((item) =>
                query === "" ||
                item.title.toLowerCase().indexOf(query.toLowerCase()) > -1
                  ? item
                  : null
              )
              .map((item, index) =>
                isEdit.index !== index ? (
                  <ItemToDo key={index} item={item} index={index} />
                ) : (
                  <ItemToDo
                    key={index}
                    item={item}
                    index={index}
                    isEdit={true}
                  />
                )
              )}
          </ul>
        </Route>
        <Route exact path="/active">
          <ul className="todo-list">
            {itemList.items
              .filter((item) => (item.isCompleted === true ? item : null))
              .map((item, index) =>
                isEdit.index !== index ? (
                  <ItemToDo key={index} item={item} index={index} />
                ) : (
                  <ItemToDo
                    key={index}
                    item={item}
                    index={index}
                    isEdit={true}
                  />
                )
              )}
          </ul>
        </Route>
        <Route exact path="/completed">
          <ul className="todo-list">
            {itemList.items
              .filter((item) => (item.isCompleted === false ? item : null))
              .map((item, index) =>
                isEdit.index !== index ? (
                  <ItemToDo key={index} item={item} index={index} />
                ) : (
                  <ItemToDo
                    key={index}
                    item={item}
                    index={index}
                    isEdit={true}
                  />
                )
              )}
          </ul>
        </Route>
      </Switch>
    </>
  );
}

export default ListToDo;
