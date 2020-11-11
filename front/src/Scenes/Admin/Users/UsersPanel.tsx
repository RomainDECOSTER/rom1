import React, { FunctionComponent } from 'react';
import { UsersList } from './UsersListContainer';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { Add } from '@material-ui/icons';
import { store } from '../../../store';
import { UserViewRoutine, UsersSearchRoutine, UsersListRoutine } from '../../../Routines/UsersRoutines';
import { connect } from 'react-redux';
import { Routine } from 'redux-saga-routines';
import { SimpleSearchComponent } from '../../../Components/SimpleSearch/Component';

interface Props {
  UsersSearchRoutine: Routine;
  UsersListRoutine: Routine;
}

const UserPanelComponent: FunctionComponent<Props> = ({ UsersSearchRoutine, UsersListRoutine, ...props }) => {
  return (
    <>
      <SimpleSearchComponent hasCampaign={false} searchRoutine={UsersSearchRoutine} listRoutine={UsersListRoutine} keySearch={'username'} />
      <UsersList />
      <Fab component={Link} to={Routes.admin.user.create.path} color={'secondary'} onClick={() => store.dispatch(UserViewRoutine(''))}>
        <Add />
      </Fab>
    </>
  );
};

export const UserPanel = connect(null, { UsersSearchRoutine, UsersListRoutine })(UserPanelComponent);
