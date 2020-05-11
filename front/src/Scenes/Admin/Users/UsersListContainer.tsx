import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { UsersListRoutine } from '../../../Routines/UsersRoutines';
import { State } from '../../../Reducers';
import { IUserState } from '../../../Reducers/User/IUserRedux';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';
import { Button } from '@material-ui/core';
import { DefaultActions } from '../../../Components/DefaultActions/DefaultActions';

interface Props {
  users: IUserState;
  UsersListRoutine: Routine;
}

const columns = [
  {
    name: 'Nom',
    selector: 'name',
  },
  {
    name: "Nom d'utilisateur",
    selector: 'username',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Roles',
    selector: 'roles',
    cell: (row: any) => row.roles.join(' / '),
  },
  {
    name: 'Actions',
    cell: (row: any) => {
      return <DefaultActions row={row} more={false} />;
    },
  },
];

const title = 'Utilisateurs listing';

const UsersListContainer: FunctionComponent<Props> = ({ users, UsersListRoutine }, ...props) => {
  return <DefaultList columns={columns} data={users} routine={UsersListRoutine} title={title} />;
};

const mapStateToProps = (state: State) => ({
  users: state.users,
});

export const UsersList = connect(mapStateToProps, { UsersListRoutine })(UsersListContainer);
