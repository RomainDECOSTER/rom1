import React, { FunctionComponent } from 'react';
import { LoginComponent } from '../../Components/Forms/Login/container';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

interface Props {
  loggedIn: boolean;
  push: any;
}

const LoginPageComponent: FunctionComponent<Props> = (props) => {
  console.log(props.loggedIn);
  if (props.loggedIn) {
    props.push('/');
  }
  return <LoginComponent />;
};

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export const LoginPage = connect(mapStateToProps, { push })(LoginPageComponent);
