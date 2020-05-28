import { all, fork } from 'redux-saga/effects';
import { validateLoginFormWatcherSaga, listenLoginRoutine } from './Login';
import { watchAppStart } from './App';
import { UserSaga } from './User/UserSaga';
import { WorkshopsSaga } from './Workshops/WorkshopsSaga';
import { VolunteersSaga } from './Volunteers/VolunteersSaga';

const usersSaga = new UserSaga();
const workshopSaga = new WorkshopsSaga();
const volunteersSaga = new VolunteersSaga();

export const rootSaga = function* root() {
  yield all([fork(usersSaga.runSaga()), fork(watchAppStart), fork(validateLoginFormWatcherSaga), fork(listenLoginRoutine), fork(workshopSaga.runSaga()), fork(volunteersSaga.runSaga())]);
};
