import { LoginState } from '../Reducers/Login';
import { RouterState } from 'connected-react-router';
import { FormState } from 'redux-form';

export type LacleState = {
  user: LoginState;
  router: RouterState;
  form: FormState;
};
