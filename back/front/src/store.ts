import { createStore, compose } from "redux";
import { rootReducer } from "./Reducers";

const composeEnhancer = compose;

export const store = createStore(rootReducer, {}, composeEnhancer());
