import React, { FunctionComponent } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { Button, TextField } from '@material-ui/core';

import { SemanticFormField } from '../../../Tools/semantic-ui-form';
import { required } from '../../../Tools/Validation';
import { LoginFormHandler } from '../../../Routines/Login';

interface FormProps extends InjectedFormProps {}

const LoginFormComponent: FunctionComponent<FormProps> = (props) => {
  return (
    <div>
      <form name="login" onSubmit={props.handleSubmit(LoginFormHandler)}>
        <Field name="username" key="username" component={SemanticFormField} as={TextField} label={`Nom d'utilisateur`} placeholder={`Entrer votre nom d'utilisateur`} validate={required} />
        <br />
        <Field name="password" key="password" component={SemanticFormField} as={TextField} type={'password'} label={'Mot de passe'} placeholder={'Entrer votre mot de passe'} validate={required} />
        <br />
        <Button disabled={props.pristine || props.submitting} key="loginValidation" type="submit">
          Valider
        </Button>
      </form>
    </div>
  );
};

export const LoginForm = reduxForm({
  form: 'login',
  enableReinitialize: true,
})(LoginFormComponent);
