import React, { FunctionComponent } from 'react';
import { UsersList } from './UsersListContainer';

interface Props {}

export const UserPanel: FunctionComponent<Props> = (props) => {
  return <UsersList />;
};
