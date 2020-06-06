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
  campaignSelected: '',
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
