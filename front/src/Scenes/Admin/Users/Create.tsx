import React, { FunctionComponent, useEffect, useState } from 'react';
import { JsonFormsDispatch } from '@jsonforms/react';
import { Actions } from '@jsonforms/core';
import { connect } from 'react-redux';
import { UserFormConfig } from '../../../FromsConfig/Users/config';
import { Container, Button, Typography, createStyles, makeStyles, Theme } from '@material-ui/core';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { State } from '../../../Reducers';
import { UserState } from '../../../Reducers/User/UserRedux';
import { UsersCreateRoutine, UserUpdateRoutine } from '../../../Routines/UsersRoutines';
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
  user: UserState;
}

const CreateComponent: FunctionComponent<Props> = ({ initForm, user }, ...props) => {
  const [initDone, setInitDone] = useState(false);
  useEffect(() => {
    if (!initDone) {
      initForm(Actions.init({ user: user }, UserFormConfig.schema, UserFormConfig.ui));
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
    initForm: (action: any) => dispatch(action),
  };
};

const mapStateToProps = (state: State) => {
  return {
    user: state.users.details !== undefined ? state.users.details : {},
  };
};

const CreateUserComponent = connect(mapStateToProps, mapsDispatchToProps)(CreateComponent);

interface PropsContainer {
  UsersCreateRoutine: Routine;
  UserUpdateRoutine: Routine;
  userData: UserState;
  hasUserDetail: boolean;
}

const CreateContainer: FunctionComponent<PropsContainer> = ({ UsersCreateRoutine, userData, hasUserDetail, UserUpdateRoutine }, ...props) => {
  const classes = useStyles();
  const register = () => {
    if (hasUserDetail) {
      UserUpdateRoutine(userData);
    } else {
      UsersCreateRoutine(userData);
    }
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
    hasUserDetail: state.users.details !== undefined,
  };
};

export const CreateUser = connect(mapsStateToProps, { UsersCreateRoutine, UserUpdateRoutine })(CreateContainer);
