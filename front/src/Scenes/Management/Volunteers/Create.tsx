import React, { FunctionComponent } from 'react';
import { VolunteersState } from '../../../Reducers/Volunteers/VoluteersRedux';
import { VolunteerFormConfig } from '../../../FromsConfig/Volunteers/config';
import { State } from '../../../Reducers';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { CreateContainer } from '../../../Components/FormContainer/FormContainer';
import { VolunteersCreateRoutine, VolunteerUpdateRoutine } from '../../../Routines/VolunteersRoutine';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface PropsContainer extends RouteComponentProps<any, any, any> {
  VolunteersCreateRoutine: Routine;
  VolunteerUpdateRoutine: Routine;
  volunteerData: VolunteersState;
  hasVolunteerDetail: boolean;
  volunteer: any;
}

const CreateVolunteerContainer: FunctionComponent<PropsContainer> = ({ hasVolunteerDetail, VolunteerUpdateRoutine, VolunteersCreateRoutine, volunteerData, volunteer, ...props }) => {
  if (props.location.state !== undefined && props.location.state !== null && props.location.state.reRegister !== undefined && props.location.state.reRegister === true) {
    delete volunteer._id;
    delete volunteer.campaign;
    delete volunteer.registrationInformation.date;
  }
  return (
    <CreateContainer
      createRoutine={VolunteersCreateRoutine}
      updateRoutine={VolunteerUpdateRoutine}
      hasEntityDetails={hasVolunteerDetail}
      entity={{ volunteer: volunteer }}
      entityFormData={volunteerData}
      formTitle={'Ajouter un bénévole'}
      formConfig={VolunteerFormConfig}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    volunteerData: extractData(state.jsonforms.core).volunteer,
    hasVolunteerDetail: state.volunteers.details !== undefined,
    volunteer: state.volunteers.details !== undefined ? state.volunteers.details : {},
  };
};

export const CreateVolunteer = connect(mapsStateToProps, { VolunteersCreateRoutine, VolunteerUpdateRoutine })(withRouter(CreateVolunteerContainer));
