import { takeEvery, put, call, select } from 'redux-saga/effects';
import { SubmissionError, isValid, getFormError } from 'redux-form';
import { LoginFormRoutine, LoginRoutine } from '../Routines/Login';
import { LoginRequest } from '../Api/Users/Login';
import { LoginDetail, LoginSuccess } from '../Types/User/Login';
import { push } from 'connected-react-router';
import { BaseActions } from '../Tools/BaseActions';
const jwtDecode = require('jwt-decode');

export function* validateLoginFormWatcherSaga() {
  //run validation on every trigger action
  yield takeEvery(LoginFormRoutine.TRIGGER, validate);
}

export function* listenLoginRoutine() {
  yield takeEvery(LoginRoutine.TRIGGER, loginRoutineStarted);
}

function* loginRoutineStarted(action: BaseActions) {
  const state = yield select();
  if (state.user.loggedIn) {
    yield put(push('/'));
    yield put(LoginRoutine.success());
  }
}

function* validate(action: BaseActions) {
  // redux-form pass form values and component props to submit handler
  // so they passed to trigger action as an action payload
  const { values, props } = action.payload;

  if (!isValid(values, props)) {
    // client-side validation failed
    const errors = getFormError(values, props);
    // reject promise given to redux-form, pass errors as SubmissionError object according to redux-form docs
    yield put(LoginFormRoutine.failure(new SubmissionError(errors)));
  } else {
    // send form data to server
    yield call(sendFormDataToServer, values);
  }

  // trigger fulfill action to end routine lifecycle
  yield put(LoginFormRoutine.fulfill());
}

function* sendFormDataToServer(formData: LoginDetail) {
  try {
    // trigger request action
    yield put(LoginFormRoutine.request());
    // perform request to '/submit' to send form data
    const response: any = yield LoginRequest(formData);
    // if request successfully finished
    const authenticaton: LoginSuccess = { ...response.data, user: jwtDecode(response.data.token) };
    yield put(LoginFormRoutine.success(authenticaton));
    localStorage.setItem('user', JSON.stringify(authenticaton.user));
    localStorage.setItem('token', JSON.stringify({ token: authenticaton.token, expires: authenticaton.exprires }));
    yield put(push('/'));
    yield put(LoginRoutine.success());
  } catch (error) {
    // if request failed
    yield put(LoginFormRoutine.failure(new SubmissionError({ _error: error.message })));
  }
}
