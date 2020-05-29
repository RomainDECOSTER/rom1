import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { LoginState, LoginReducer } from './Login';
import { History } from 'history';
import { reducer as notifications } from 'react-notification-system-redux';
import { UserRedux } from './User/UserRedux';
import { IUserState } from './User/IUserRedux';
import { jsonformsReducer } from '@jsonforms/core';
import { WorkshopsRedux, WorkshopsState } from './Workshops/WorkshopsRedux';
import { appReducer, AppState } from './App';
import { VolunteersState, VolunteersRedux } from './Volunteers/VoluteersRedux';
import { StudentsState, StudentsRedux } from './Students/StudentRedux';

const userRedux = new UserRedux();
const workshopsRedux = new WorkshopsRedux();
const voluteersRedux = new VolunteersRedux();
const studentsRedux = new StudentsRedux();
export interface State {
  router: any;
  form: FormStateMap;
  user: LoginState;
  notifications: any;
  users: IUserState;
  jsonforms: any;
  workshops: WorkshopsState;
  app: AppState;
  volunteers: VolunteersState;
  students: StudentsState;
}

export const rootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    form: formReducer,
    user: LoginReducer,
    notifications,
    users: userRedux.getReducer,
    jsonforms: jsonformsReducer(),
    workshops: workshopsRedux.getReducer,
    app: appReducer,
    volunteers: voluteersRedux.getReducer,
    students: studentsRedux.getReducer,
  });
