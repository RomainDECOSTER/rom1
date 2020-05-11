import React, { FunctionComponent } from 'react';
import { IEntitySate } from '../../Reducers/IEntityRedux';
import { Routine } from 'redux-saga-routines';
import { DefaultListComponent } from './DefaultListComponent';

interface Props {
  data: IEntitySate<any, any>;
  routine: Routine;
  sortRoutine: Routine;
  columns: any;
  title: string;
  defaultSortKey: string;
  defaultSortDir: string;
}

export const DefaultList: FunctionComponent<Props> = ({ data, routine, title, columns, sortRoutine, defaultSortKey, defaultSortDir }, ...props) => {
  if ((data.list === undefined && data.loading === false) || data.created === true || data.updated === true) {
    if (data.list !== undefined) {
      routine({ pageNumber: data.list.entity.page, itemNumber: data.list.entity.item });
    } else {
      sortRoutine({ sortKey: defaultSortKey, sortDir: defaultSortDir });
      routine({});
    }
  }

  const onPageChange = (newPage: number): void => {
    routine({ pageNumber: newPage });
  };

  const onSort = (column: any, direction: string): void => {
    sortRoutine({ sortKey: column.selector, sortDir: direction });
    routine({ pageNumber: data.list.entity.page, itemNumber: data.list.entity.item });
  };

  return <DefaultListComponent data={data} handlePageChange={onPageChange} handleSort={onSort} title={title} columns={columns} />;
};
