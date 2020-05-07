import React, { FunctionComponent } from 'react';
import { UsersList } from './UsersListContainer';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { Add } from '@material-ui/icons';

interface Props {}

export const UserPanel: FunctionComponent<Props> = (props) => {
  return (
    <>
      <UsersList />
      <Fab component={Link} to={Routes.admin.user.create.path} color={'secondary'}>
        <Add />
      </Fab>
    </>
  );
};
