import { BaseActions } from '../Tools/BaseActions';
import { LoginFormRoutine } from '../Routines/Login';
import { LoginSuccess } from '../Types/User/Login';

export type LoginState = {
  user: {
    authentication?: LoginSuccess;
    loggedIn: boolean;
  };
};

const initialState: LoginState = {
  user: {
    loggedIn: false,
  },
};

export const LoginReducer = (state: LoginState = initialState, action: BaseActions) => {
  switch (action.type) {
    case LoginFormRoutine.SUCCESS:
      const newState = {
        user: {
          authentication: action.payload,
        },
        loggedIn: true,
        ...state,
      };
      return newState;
    default:
      return state;
  }
};
