import React, { FunctionComponent, useEffect, useState } from 'react';
import { JsonFormsDispatch } from '@jsonforms/react';
import { Actions } from '@jsonforms/core';
import { connect } from 'react-redux';
import { UserFormConfig } from '../../../FromsConfig/Users/config';
import { Container, Button, Typography, createStyles, makeStyles, Theme } from '@material-ui/core';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { State } from '../../../Reducers';
import { UserState } from '../../../Reducers/User/UserRedux';
import { UsersCreateRoutine } from '../../../Routines/UsersRoutines';
import { Routine } from 'redux-saga-routines';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: 'center',
    },
    btn: {
      textAlign: 'center',
    },
    btnColor: {
      color: 'white',
    },
  }),
);

interface Props {
  initForm: any;
}

const CreateComponent: FunctionComponent<Props> = ({ initForm }, ...props) => {
  const [initDone, setInitDone] = useState(false);
  useEffect(() => {
    if (!initDone) {
      initForm();
      setInitDone(true);
    }
  }, [initDone, initForm]);

  return (
    <>
      <Container>
        <JsonFormsDispatch />
      </Container>
    </>
  );
};

const mapsDispatchToProps = (dispatch: any) => {
  return {
    initForm: () => dispatch(Actions.init({ user: {} }, UserFormConfig.schema, UserFormConfig.ui)),
  };
};

const CreateUserComponent = connect(null, mapsDispatchToProps)(CreateComponent);

interface PropsContainer {
  UsersCreateRoutine: Routine;
  userData: UserState;
}

const CreateContainer: FunctionComponent<PropsContainer> = ({ UsersCreateRoutine, userData }, ...props) => {
  const classes = useStyles();
  const register = () => {
    UsersCreateRoutine(userData);
  };
  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom={true} className={classes.title}>
        Ajouter un nouvel utilisateur
      </Typography>
      <CreateUserComponent />
      <Typography className={classes.btn}>
        <Button onClick={register} variant={'contained'} color={'primary'} className={classes.btnColor}>
          Enregistrer
        </Button>
      </Typography>
    </>
  );
};

const mapsStateToProps = (state: State) => {
  return {
    userData: extractData(state.jsonforms.core).user,
  };
};

export const CreateUser = connect(mapsStateToProps, { UsersCreateRoutine })(CreateContainer);
