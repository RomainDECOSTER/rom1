import { BaseActions } from '../Tools/BaseActions';
import { LoginFormRoutine, DisconnectRoutine } from '../Routines/Login';
import { LoginSuccess } from '../Types/User/Login';

export type LoginState = {
  authentication?: LoginSuccess;
  loggedIn: boolean;
};

const initialState: LoginState = {
  loggedIn: false,
};

export const LoginReducer = (state: LoginState = initialState, action: BaseActions) => {
  switch (action.type) {
    case LoginFormRoutine.SUCCESS:
      const newState = {
        authentication: action.payload,
        loggedIn: true,
      };
      return newState;
    case DisconnectRoutine.TRIGGER:
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
};
