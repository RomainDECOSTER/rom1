import { combineReducers } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import { LoginState, LoginReducer } from "./Login";

export interface State {
  user: LoginState;
  form: FormStateMap;
}

export const rootReducer = combineReducers<State>({
  form: formReducer,
  user: LoginReducer,
});
