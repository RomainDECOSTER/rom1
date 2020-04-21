import React, { FunctionComponent } from "react";
import { InjectedFormProps } from "redux-form";
import { connect } from "react-redux";
import { LoginForm } from "./component";
import { LoginFormHandler } from "../../../Routines/Login";

interface LoginContainerProps extends Pick<InjectedFormProps, "initialValues"> {}

const LoginContainer: FunctionComponent<LoginContainerProps> = (props) => {
  return <LoginForm onSubmit={LoginFormHandler} initialValues={props.initialValues} />;
};

const mapStateToProps = (state: any) => ({
  initialValues: {},
});
const mapDispatchToProps = (dispatch: object) => {
  return {};
};

export const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
