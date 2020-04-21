import { all, fork } from "redux-saga/effects";
import { validateLoginFormWatcherSaga } from "./Login";

export const rootSaga = function* root() {
  yield all([fork(validateLoginFormWatcherSaga)]);
};
