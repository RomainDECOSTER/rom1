import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles, Container, Typography, Button } from '@material-ui/core';
import { WorkshopsState } from '../../../Reducers/Workshops/WorkshopsRedux';
import { Actions } from '@jsonforms/core';
import { WorkshopsFormConfig } from '../../../FromsConfig/Workshops/config';
import { JsonFormsDispatch } from '@jsonforms/react';
import { Dispatch } from 'redux';
import { State } from '../../../Reducers';
import { WorkshopsCreateRoutine, WorkshopUpdateRoutine } from '../../../Routines/WorkshopsRoutine';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { extractData } from '@jsonforms/core/lib/reducers/core';

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
  workshop: WorkshopsState;
}

const CreateComponent: FunctionComponent<Props> = ({ initForm, workshop }, ...props) => {
  const [initDone, setInitDone] = useState(false);
  useEffect(() => {
    if (!initDone) {
      initForm(Actions.init({ workshop: workshop }, WorkshopsFormConfig.schema, WorkshopsFormConfig.ui));
      setInitDone(true);
    }
  }, [initDone, initForm, workshop]);

  return (
    <>
      <Container>
        <JsonFormsDispatch />
      </Container>
    </>
  );
};

const mapsDispatchToProps = (dispatch: Dispatch) => {
  return {
    initForm: (action: any) => dispatch(action),
  };
};

const mapStatetoProps = (state: State) => {
  return {
    workshop: state.workshops.details !== undefined ? state.workshops.details : {},
  };
};

const CreateWorkshopComponent = connect(mapStatetoProps, mapsDispatchToProps)(CreateComponent);

interface PropsContainer {
  WorkshopsCreateRoutine: Routine;
  WorkshopUpdateRoutine: Routine;
  workshopData: WorkshopsState;
  hasWorkshopDetail: boolean;
}

const CreateContainer: FunctionComponent<PropsContainer> = ({ hasWorkshopDetail, WorkshopUpdateRoutine, WorkshopsCreateRoutine, workshopData }, ...props) => {
  const classes = useStyles();
  const register = () => {
    if (hasWorkshopDetail) {
      WorkshopUpdateRoutine(workshopData);
    } else {
      WorkshopsCreateRoutine(workshopData);
    }
  };
  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom={true} className={classes.title}>
        Ajouter un atelier
      </Typography>
      <CreateWorkshopComponent />
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
    workshopData: extractData(state.jsonforms.core).workshop,
    hasWorkshopDetail: state.workshops.details !== undefined,
  };
};

export const CreateWorkshop = connect(mapsStateToProps, { WorkshopsCreateRoutine, WorkshopUpdateRoutine })(CreateContainer);
