import React, { FunctionComponent } from 'react';
import { WorkshopsState } from '../../../Reducers/Workshops/WorkshopsRedux';
import { WorkshopsFormConfig } from '../../../FromsConfig/Workshops/config';
import { State } from '../../../Reducers';
import { WorkshopsCreateRoutine, WorkshopUpdateRoutine } from '../../../Routines/WorkshopsRoutine';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { CreateContainer } from '../../../Components/FormContainer/FormContainer';

interface PropsContainer {
  WorkshopsCreateRoutine: Routine;
  WorkshopUpdateRoutine: Routine;
  workshopData: WorkshopsState;
  hasWorkshopDetail: boolean;
  workshop: WorkshopsState;
}

const CreateWorkshopContainer: FunctionComponent<PropsContainer> = ({ hasWorkshopDetail, WorkshopUpdateRoutine, WorkshopsCreateRoutine, workshopData, workshop }, ...props) => {
  return (
    <CreateContainer
      createRoutine={WorkshopsCreateRoutine}
      updateRoutine={WorkshopUpdateRoutine}
      hasEntityDetails={hasWorkshopDetail}
      entity={{ workshop: workshop }}
      entityFormData={workshopData}
      formTitle={'Ajouter un atelier'}
      formConfig={WorkshopsFormConfig}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    workshopData: extractData(state.jsonforms.core).workshop,
    hasWorkshopDetail: state.workshops.details !== undefined,
    workshop: state.workshops.details !== undefined ? state.workshops.details : {},
  };
};

export const CreateWorkshop = connect(mapsStateToProps, { WorkshopsCreateRoutine, WorkshopUpdateRoutine })(CreateWorkshopContainer);
