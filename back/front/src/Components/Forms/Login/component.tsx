import React, { FunctionComponent } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { Button, Form } from "semantic-ui-react";

import { SemanticFormField } from "../../../Tools/semantic-ui-form";
import { required } from "../../../Tools/Validation";

interface FormProps extends InjectedFormProps {}

const LoginFormComponent: FunctionComponent<FormProps> = (props) => (
  <>
    <Form name="login" onSubmit={props.handleSubmit}>
      <Field name="username" component={SemanticFormField} as={Form.Input} label={`Nom d'utilisateur`} placeholder={`Entrer votre nom d'utilisateur`} validate={required} />
      <Field name="password" component={SemanticFormField} as={Form.Input} type={"password"} label={"Mot de passe"} placeholder={"Entrer votre mot de passe"} validate={required} />
      <Button primary={true} loading={props.submitting} disabled={props.pristine || props.submitting}>
        Valider
      </Button>
    </Form>
  </>
);

export const LoginForm = reduxForm({
  form: "login",
  enableReinitialize: true,
})(LoginFormComponent);
