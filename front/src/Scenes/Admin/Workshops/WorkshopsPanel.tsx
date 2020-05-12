import React, { FunctionComponent } from 'react';
import { WorkshopsList } from './WorkshopsListContainer';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { store } from '../../../store';
import { WorkshopViewRoutine } from '../../../Routines/WorkshopsRoutine';
import { Add } from '@material-ui/icons';

interface Props {}

export const WorkshopsPanel: FunctionComponent<Props> = (props) => {
  return (
    <>
      <WorkshopsList />
      <Fab component={Link} to={Routes.admin.workshops.create.path} color={'secondary'} onClick={() => store.dispatch(WorkshopViewRoutine(''))}>
        <Add />
      </Fab>
    </>
  );
};
