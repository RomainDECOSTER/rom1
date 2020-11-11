import { BaseActions } from '../Tools/BaseActions';
import { AppRoutine, AppCampaignSelect } from '../Routines/App';

export type AppState = {
  starting: boolean;
  started: boolean;
  campaignSelected: string;
};

const initialState: AppState = {
  starting: false,
  started: false,
  campaignSelected: process.env.REACT_APP_DEFAULT_CAMPAIGN || '5edcef7494ef3c1319d4b173',
};

export const appReducer = (state: AppState = initialState, action: BaseActions) => {
  switch (action.type) {
    case AppRoutine.TRIGGER:
      return { ...state, starting: true };
    case AppRoutine.SUCCESS:
      return { ...state, started: true, starting: false };

    case AppCampaignSelect.SUCCESS:
      return { ...state, campaignSelected: action.payload };
    default:
      return state;
  }
};
