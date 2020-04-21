import { takeEvery, put, call } from 'redux-saga/effects';
import { SubmissionError, isValid, getFormError } from 'redux-form';
import { LoginFormRoutine } from '../Routines/Login';
import { LoginRequest } from '../Api/Users/Login';
import { LoginDetail } from '../Types/User/Login';
import { push } from 'connected-react-router';

export function* validateLoginFormWatcherSaga() {
  //run validation on every trigger action
  yield takeEvery(LoginFormRoutine.TRIGGER, validate);
}

function* validate(action: any) {
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
    yield put(LoginFormRoutine.success(response.data));
    yield put(push('/'));
  } catch (error) {
    // if request failed
    yield put(LoginFormRoutine.failure(new SubmissionError({ _error: error.message })));
  }
}
