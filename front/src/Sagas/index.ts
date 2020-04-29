import { all, fork } from 'redux-saga/effects';
import { validateLoginFormWatcherSaga, listenLoginRoutine } from './Login';
import { watchAppStart } from './App';
import { UserSaga } from './User/UserSaga';

export const rootSaga = (store: any) => {
  return function* root() {
    const usersSaga = new UserSaga(store.getState());
    yield all([fork(usersSaga.watchListRoutine()), fork(watchAppStart), fork(validateLoginFormWatcherSaga), fork(listenLoginRoutine)]);
  };
};
