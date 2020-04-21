import { all, fork } from 'redux-saga/effects';
import { validateLoginFormWatcherSaga, listenLoginRoutine } from './Login';

export const rootSaga = function* root() {
  yield all([fork(validateLoginFormWatcherSaga), fork(listenLoginRoutine)]);
};
