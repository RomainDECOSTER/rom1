import React, { FunctionComponent } from 'react';
import { IEntitySate } from '../../Reducers/IEntityRedux';
import DataTable from 'react-data-table-component';

interface IListProps {
  data: IEntitySate<any, any>;
  handlePageChange: any;
  handleSort: any;
  columns: any[];
  title: string;
}

export const DefaultListComponent: FunctionComponent<IListProps> = ({ data, title, columns, handlePageChange, handleSort }, ...props) => {
  return (
    <DataTable
      title={title}
      columns={columns}
      data={data.list?.entity.data as unknown[] | any[]}
      pagination={true}
      paginationServer={true}
      paginationServerOptions={{ persistSelectedOnPageChange: false, persistSelectedOnSort: false }}
      paginationComponentOptions={{ rowsPerPageText: 'Item par page', rangeSeparatorText: 'sur', noRowsPerPage: true }}
      sortServer={true}
      progressPending={data.loading}
      onChangePage={handlePageChange}
      onSort={handleSort}
    />
  );
};
