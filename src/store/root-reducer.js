import { combineReducers } from "redux";
import { positionReducer } from "./positions/position-reducer.js";
import { filterReducer } from "./filters/filter-reducer.js";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
