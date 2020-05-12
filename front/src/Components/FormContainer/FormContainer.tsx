import React, { FunctionComponent, useState, useEffect } from 'react';
import { Actions } from '@jsonforms/core';
import { JsonFormsDispatch } from '@jsonforms/react';
import { store } from '../../store';
import { Routine } from 'redux-saga-routines';
import { makeStyles, Theme, createStyles, Container, Typography, Button } from '@material-ui/core';

interface ComponentProps {
  entity: any;
  formConfig: any;
}

const CreateComponent: FunctionComponent<ComponentProps> = ({ entity, formConfig }, ...props) => {
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    if (!initDone) {
      store.dispatch(Actions.init(entity, formConfig.schema, formConfig.ui));
      setInitDone(true);
    }
  }, [initDone, entity, formConfig]);

  return (
    <>
      <Container>
        <JsonFormsDispatch />
      </Container>
    </>
  );
};

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

interface CreateContainerProps {
  entity: any;
  formConfig: any;
  createRoutine: Routine;
  updateRoutine: Routine;
  entityFormData: any;
  hasEntityDetails: boolean;
  formTitle: string;
}

export const CreateContainer: FunctionComponent<CreateContainerProps> = ({ entity, formConfig, createRoutine, updateRoutine, entityFormData, hasEntityDetails, formTitle }, ...props) => {
  const classes = useStyles();
  const register = () => {
    if (hasEntityDetails) {
      updateRoutine(entityFormData);
    } else {
      createRoutine(entityFormData);
    }
  };

  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom={true} className={classes.title}>
        {formTitle}
      </Typography>
      <CreateComponent entity={entity} formConfig={formConfig} />
      <Typography className={classes.btn}>
        <Button onClick={register} variant={'contained'} color={'primary'} className={classes.btnColor}>
          Enregistrer
        </Button>
      </Typography>
    </>
  );
};
