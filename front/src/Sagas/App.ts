import { takeEvery, put } from 'redux-saga/effects';
import { AppRoutine } from '../Routines/App';
import { LoginFormRoutine } from '../Routines/Login';

export function* watchAppStart() {
  yield takeEvery(AppRoutine.TRIGGER, appStarting);
}

function* appStarting() {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  if (user !== null && token !== null) {
    const authentication = { ...JSON.parse(token), ...JSON.parse(user) };
    yield put(LoginFormRoutine.success(authentication));
  }
}
