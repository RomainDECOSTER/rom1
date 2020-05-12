import React, { FunctionComponent } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { Button, TextField, Container, makeStyles, Theme, createStyles } from '@material-ui/core';

import { SemanticFormField } from '../../../Tools/semantic-ui-form';
import { required } from '../../../Tools/Validation';
import { LoginFormHandler } from '../../../Routines/Login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      width: '100%',
    },
    btn: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface FormProps extends InjectedFormProps {}

const LoginFormComponent: FunctionComponent<FormProps> = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <form name={'login'} onSubmit={props.handleSubmit(LoginFormHandler)} className={classes.field}>
        <Field
          name="username"
          key="username"
          component={SemanticFormField}
          as={TextField}
          label={`Nom d'utilisateur`}
          placeholder={`Entrer votre nom d'utilisateur`}
          validate={required}
          className={classes.field}
        />
        <br />
        <Field
          name="password"
          key="password"
          component={SemanticFormField}
          as={TextField}
          type={'password'}
          label={'Mot de passe'}
          placeholder={'Entrer votre mot de passe'}
          validate={required}
          className={classes.field}
        />
        <br />
        <Button className={classes.btn} disabled={props.pristine || props.submitting} key="loginValidation" type="submit" color={'primary'} variant={'outlined'}>
          Valider
        </Button>
      </form>
    </Container>
  );
};

export const LoginForm = reduxForm({
  form: 'login',
  enableReinitialize: true,
})(LoginFormComponent);
