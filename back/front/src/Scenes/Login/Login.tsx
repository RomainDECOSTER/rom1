import React, { FunctionComponent } from "react";
import { LoginComponent } from "../../Components/Forms/Login/container";

interface Props {}

export const LoginPage: FunctionComponent<Props> = (props) => {
  const submitForm = (formValues: object) => {
    console.log(formValues);
  };
  return <LoginComponent submitForm={submitForm} />;
};
