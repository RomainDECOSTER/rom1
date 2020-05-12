import { BaseActions } from '../Tools/BaseActions';
import { AppRoutine } from '../Routines/App';

export type AppState = {
  starting: boolean;
  started: boolean;
};

const initialState: AppState = {
  starting: false,
  started: false,
};

export const appReducer = (state: AppState = initialState, action: BaseActions) => {
  switch (action.type) {
    case AppRoutine.TRIGGER:
      return { ...state, starting: true };
    case AppRoutine.SUCCESS:
      return { ...state, started: true, starting: false };
    default:
      return state;
  }
};
