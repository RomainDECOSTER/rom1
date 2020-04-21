import React, { FunctionComponent } from "react";
import { InjectedFormProps } from "redux-form";
import { connect } from "react-redux";
import { LoginForm } from "./component";

interface LoginContainerProps extends Pick<InjectedFormProps, "initialValues"> {
  submitForm: any;
}

const LoginContainer: FunctionComponent<LoginContainerProps> = ({ submitForm }, props) => {
  return <LoginForm onSubmit={submitForm} initialValues={props.initialValues} />;
};

const mapStateToProps = (state: any) => ({
  initialValues: {},
});
const mapDispatchToProps = (dispatch: object) => {
  return {};
};

export const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
