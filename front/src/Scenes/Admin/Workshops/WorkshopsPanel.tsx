import React, { FunctionComponent } from 'react';
import { WorkshopsList } from './WorkshopsListContainer';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { store } from '../../../store';
import { WorkshopViewRoutine } from '../../../Routines/WorkshopsRoutine';
import { Add } from '@material-ui/icons';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { WorkshopsListRoutine, WorkshopsSearchRoutine } from '../../../Routines/WorkshopsRoutine';
import { SimpleSearchComponent } from '../../../Components/SimpleSearch/Component';

interface Props {
  WorkshopsSearchRoutine: Routine;
  WorkshopsListRoutine: Routine;
}

const WorkshopsPanelComponent: FunctionComponent<Props> = ({ WorkshopsListRoutine, WorkshopsSearchRoutine, ...props }) => {
  return (
    <>
      <SimpleSearchComponent hasCampaign={false} searchRoutine={WorkshopsSearchRoutine} listRoutine={WorkshopsListRoutine} keySearch={'name'} />
      <WorkshopsList />
      <Fab component={Link} to={Routes.admin.workshops.create.path} color={'secondary'} onClick={() => store.dispatch(WorkshopViewRoutine(''))}>
        <Add />
      </Fab>
    </>
  );
};

export const WorkshopsPanel = connect(null, { WorkshopsListRoutine, WorkshopsSearchRoutine })(WorkshopsPanelComponent);
