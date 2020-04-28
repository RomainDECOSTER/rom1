import { all, fork } from 'redux-saga/effects';
import { validateLoginFormWatcherSaga, listenLoginRoutine } from './Login';
import { watchAppStart } from './App';

export const rootSaga = function* root() {
  yield all([fork(watchAppStart), fork(validateLoginFormWatcherSaga), fork(listenLoginRoutine)]);
};
