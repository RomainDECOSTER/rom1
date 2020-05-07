import React, { FunctionComponent } from 'react';
import { LoginComponent } from '../../Components/Forms/Login/container';
import { connect } from 'react-redux';
import { LoginRoutine } from '../../Routines/Login';
import { Routine } from 'redux-saga-routines';

interface Props {
  LoginRoutine: Routine;
}

const LoginPageComponent: FunctionComponent<Props> = (props) => {
  props.LoginRoutine();
  return <LoginComponent />;
};

export const LoginPage = connect(null, { LoginRoutine })(LoginPageComponent);
