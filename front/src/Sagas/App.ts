import { takeEvery, put } from 'redux-saga/effects';
import { AppRoutine, AppCampaignSelect } from '../Routines/App';
import { LoginFormRoutine, LoginRoutine } from '../Routines/Login';
import { CampaignsListRoutine } from '../Routines/CampaignRoutine';
import { BaseActions } from '../Tools/BaseActions';

export function* watchAppStart() {
  yield takeEvery(AppRoutine.TRIGGER, appStarting);
  yield takeEvery(AppCampaignSelect.TRIGGER, campaignSelect);
}

function* appStarting() {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  if (user !== null && token !== null) {
    const authentication = { ...JSON.parse(token), user: JSON.parse(user) };
    yield put(LoginFormRoutine.success(authentication));
    yield put(LoginRoutine.success());
    yield put(CampaignsListRoutine(''));
  }
  yield put(AppRoutine.success());
}

function* campaignSelect(actions: BaseActions) {
  yield put(AppCampaignSelect.success(actions.payload));
}
