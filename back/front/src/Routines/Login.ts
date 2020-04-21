import { createRoutine, bindRoutineToReduxForm } from "redux-saga-routines";

export const LoginFormRoutine = createRoutine("LOGIN_FORM");
export const LoginFormHandler = bindRoutineToReduxForm(LoginFormRoutine);
