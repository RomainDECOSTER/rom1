import React, { FunctionComponent } from 'react';
import { LoginComponent } from '../../Components/Forms/Login/container';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { LoginRoutine } from '../../Routines/Login';
import { Routine } from 'redux-saga-routines';
import { LacleState } from '../../Types/State';

interface Props {
  loggedIn: boolean;
  push: any;
  LoginRoutine: Routine;
}

const LoginPageComponent: FunctionComponent<Props> = (props) => {
  props.LoginRoutine(props.loggedIn);
  return <LoginComponent />;
};

const mapStateToProps = (state: LacleState) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export const LoginPage = connect(mapStateToProps, { push, LoginRoutine })(LoginPageComponent);
