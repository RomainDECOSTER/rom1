import { BaseActions } from "../Tools/BaseActions";
import { LoginFormRoutine } from "../Routines/Login";

export type LoginState = {
  user: {
    username?: string;
    passorword?: string;
  };
};

const initialState: LoginState = {
  user: {},
};

export const LoginReducer = (state: LoginState = initialState, action: BaseActions) => {
  switch (action.type) {
    case LoginFormRoutine.SUCCESS:
      console.log("action", action.payload);
      return state;
    default:
      return state;
  }
};
