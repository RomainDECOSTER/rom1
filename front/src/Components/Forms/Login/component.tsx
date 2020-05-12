import React, { FunctionComponent } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { Button, TextField, Container, FormControl, makeStyles, Theme, createStyles } from '@material-ui/core';

import { SemanticFormField } from '../../../Tools/semantic-ui-form';
import { required } from '../../../Tools/Validation';
import { LoginFormHandler } from '../../../Routines/Login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      width: '100%',
    },
  }),
);

interface FormProps extends InjectedFormProps {}

const LoginFormComponent: FunctionComponent<FormProps> = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <FormControl onSubmit={props.handleSubmit(LoginFormHandler)} className={classes.field}>
        <Field name="username" key="username" component={SemanticFormField} as={TextField} label={`Nom d'utilisateur`} placeholder={`Entrer votre nom d'utilisateur`} validate={required} />
        <br />
        <Field name="password" key="password" component={SemanticFormField} as={TextField} type={'password'} label={'Mot de passe'} placeholder={'Entrer votre mot de passe'} validate={required} />
        <br />
        <Button disabled={props.pristine || props.submitting} key="loginValidation" type="submit">
          Valider
        </Button>
      </FormControl>
    </Container>
  );
};

export const LoginForm = reduxForm({
  form: 'login',
  enableReinitialize: true,
})(LoginFormComponent);
