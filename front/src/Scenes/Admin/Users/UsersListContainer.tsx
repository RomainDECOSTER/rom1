import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { UsersListRoutine } from '../../../Routines/UsersRoutines';
import { State } from '../../../Reducers';
import { IUserState } from '../../../Reducers/User/IUserRedux';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';

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
];

const title = 'Utilisateurs listing';

const UsersListContainer: FunctionComponent<Props> = ({ users, UsersListRoutine }, props) => {
  return <DefaultList columns={columns} data={users} routine={UsersListRoutine} title={title} />;
};

const mapStateToProps = (state: State) => ({
  users: state.users,
});

export const UsersList = connect(mapStateToProps, { UsersListRoutine })(UsersListContainer);
