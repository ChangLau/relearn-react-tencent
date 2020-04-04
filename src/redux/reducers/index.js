import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import nums from "./nums";

export default combineReducers({ todos, visibilityFilter, nums });
