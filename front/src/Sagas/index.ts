import { all, fork } from 'redux-saga/effects';
import { validateLoginFormWatcherSaga, listenLoginRoutine } from './Login';
import { watchAppStart } from './App';
import { UserSaga } from './User/UserSaga';

const usersSaga = new UserSaga();

export const rootSaga = function* root() {
  yield all([
    fork(usersSaga.watchListRoutine()),
    fork(usersSaga.watchCreateRoutine()),
    fork(usersSaga.watchDeleteRoutine()),
    fork(watchAppStart),
    fork(validateLoginFormWatcherSaga),
    fork(listenLoginRoutine),
  ]);
};
