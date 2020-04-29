import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { LoginState, LoginReducer } from './Login';
import { History } from 'history';
import { reducer as notifications } from 'react-notification-system-redux';
import { UserRedux } from './User/UserRedux';
import { IUserState } from './User/IUserRedux';

const userRedux = new UserRedux();

export interface State {
  router: any;
  form: FormStateMap;
  user: LoginState;
  notifications: any;
  users: IUserState;
}

export const rootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    form: formReducer,
    user: LoginReducer,
    notifications,
    users: userRedux.getReducer,
  });
