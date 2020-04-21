import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { LoginState, LoginReducer } from './Login';
import { History } from 'history';
export interface State {
  router: any;
  form: FormStateMap;
  user: LoginState;
}

export const rootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    form: formReducer,
    user: LoginReducer,
  });
