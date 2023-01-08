import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./root-reducer.js";

export const store = createStore(rootReducer, devToolsEnhancer());
