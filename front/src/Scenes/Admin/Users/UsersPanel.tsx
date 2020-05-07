import React, { FunctionComponent } from 'react';
import { UsersList } from './UsersListContainer';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';

interface Props {}

export const UserPanel: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Button component={Link} to={Routes.admin.user.create.path}>
        Ajouter un utilisateur
      </Button>
      <UsersList />
    </>
  );
};
