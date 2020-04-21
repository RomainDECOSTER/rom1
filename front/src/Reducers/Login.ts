import { BaseActions } from '../Tools/BaseActions';
import { LoginFormRoutine } from '../Routines/Login';
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
        ...state,
        authentication: action.payload,
        loggedIn: true,
      };
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
