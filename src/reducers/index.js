import { combineReducers } from "redux";

import ItemList from "./ItemList";
import querySearch from "./querySearch";
import isSearch from "./search";
import isEdit from "./isEdit";
const rootReducers = combineReducers({
  ItemList,
  searchState: isSearch,
  query: querySearch,
  isEdit,
});

export default rootReducers;
