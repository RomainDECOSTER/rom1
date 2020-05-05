import React, { FunctionComponent } from 'react';
import { UsersList } from './UsersListContainer';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';

interface Props {}

export const UserPanel: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Button as={Link} to={Routes.admin.user.create.path} content={'Ajouter un utilisateur'} primary={true} />
      <UsersList />
    </>
  );
};
