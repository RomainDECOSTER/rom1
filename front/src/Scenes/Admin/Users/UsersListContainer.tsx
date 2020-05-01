import React, { FunctionComponent } from 'react';
import { UsersListComponent } from './UsersListComponent';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { UsersListRoutine } from '../../../Routines/UsersRoutines';
import { State } from '../../../Reducers';
import { IUserState } from '../../../Reducers/User/IUserRedux';

interface Props {
  users: IUserState;
  UsersListRoutine: Routine;
}

const UsersListContainer: FunctionComponent<Props> = ({ users, UsersListRoutine }, props) => {
  if (users.list === undefined && users.loading === false) {
    UsersListRoutine({});
  }

  const onPageChange = (newPage: number): void => {
    console.log('page change');
  };

  const onSort = (column: any, direction: any): void => {
    UsersListRoutine({ sortKey: column.selector, sortDir: direction });
  };

  return <UsersListComponent users={users} handlePageChange={onPageChange} handleSort={onSort} />;
};

const mapStateToProps = (state: State) => ({
  users: state.users,
});

export const UsersList = connect(mapStateToProps, { UsersListRoutine })(UsersListContainer);
