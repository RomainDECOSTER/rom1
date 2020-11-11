import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { SimpleSearchComponent } from '../../../Components/SimpleSearch/Component';
import { VolunteersSearchRoutine, VolunteersListRoutine, VolunteerViewRoutine } from '../../../Routines/VolunteersRoutine';
import { connect } from 'react-redux';
import { VolunteersList } from './VolunteersListContainer';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { store } from '../../../store';
import { Add } from '@material-ui/icons';

interface Props {
  VolunteersSearchRoutine: Routine;
  VolunteersListRoutine: Routine;
}

const VolunteersPanelComponent: FunctionComponent<Props> = ({ VolunteersSearchRoutine, VolunteersListRoutine, ...props }) => {
  return (
    <>
      <SimpleSearchComponent hasCampaign={true} searchRoutine={VolunteersSearchRoutine} listRoutine={VolunteersListRoutine} keySearch={'generalInformation.last_name'} />
      <VolunteersList />
      <Fab component={Link} to={Routes.management.volunteers.create.path} color={'secondary'} onClick={() => store.dispatch(VolunteerViewRoutine(''))}>
        <Add />
      </Fab>
    </>
  );
};

export const VolunteersPanel = connect(null, { VolunteersListRoutine, VolunteersSearchRoutine })(VolunteersPanelComponent);
