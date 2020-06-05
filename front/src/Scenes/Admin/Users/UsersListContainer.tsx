import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { UsersListRoutine, UserSortRoutine, UserDeleteRoutine, UserViewRoutine } from '../../../Routines/UsersRoutines';
import { State } from '../../../Reducers';
import { IUserState } from '../../../Reducers/User/IUserRedux';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';
import { DefaultActions } from '../../../Components/DefaultActions/DefaultActions';
import { Routes } from '../../../Routes/Routes';

interface Props {
  users: IUserState;
  UsersListRoutine: Routine;
  UserSortRoutine: Routine;
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
      return <DefaultActions disabledView={false} row={row} more={false} path={Routes.admin.user} DeleteRoutine={UserDeleteRoutine} ViewRoutine={UserViewRoutine} />;
    },
  },
];

const title = 'Utilisateurs listing';

const UsersListContainer: FunctionComponent<Props> = ({ users, UsersListRoutine, UserSortRoutine }, ...props) => {
  return <DefaultList columns={columns} data={users} routine={UsersListRoutine} sortRoutine={UserSortRoutine} title={title} defaultSortKey={'username'} defaultSortDir={'asc'} />;
};

const mapStateToProps = (state: State) => ({
  users: state.users,
});

export const UsersList = connect(mapStateToProps, { UsersListRoutine, UserSortRoutine })(UsersListContainer);
