import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export interface State {}

export const rootReducer = combineReducers<State>({
  form: formReducer,
});
