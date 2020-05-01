import React, { FunctionComponent } from 'react';
import DataTable from 'react-data-table-component';
import { IUserState } from '../../../Reducers/User/IUserRedux';
import UserModel from '../../../Api/Datamodel/UserModel';
interface Props {
  users: IUserState;
  handlePageChange: any;
  handleSort: any;
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

export const UsersListComponent: FunctionComponent<Props> = ({ users, handlePageChange, handleSort }, ...props) => {
  return (
    <DataTable
      title={'Utilisateurs listing'}
      columns={columns}
      data={users.list?.entity.data as unknown[] | UserModel[]}
      pagination={true}
      paginationServer={true}
      paginationTotalRows={users.list?.entity.total}
      paginationServerOptions={{ persistSelectedOnPageChange: false, persistSelectedOnSort: false }}
      paginationComponentOptions={{ rowsPerPageText: 'Item par page', rangeSeparatorText: 'sur', noRowsPerPage: true }}
      sortServer={true}
      progressPending={users.loading}
      onChangePage={handlePageChange}
      onSort={handleSort}
    />
  );
};
