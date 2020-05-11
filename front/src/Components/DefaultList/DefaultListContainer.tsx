import React, { FunctionComponent } from 'react';
import { IEntitySate } from '../../Reducers/IEntityRedux';
import { Routine } from 'redux-saga-routines';
import { DefaultListComponent } from './DefaultListComponent';

interface Props {
  data: IEntitySate<any, any>;
  routine: Routine;
  columns: any;
  title: string;
}

export const DefaultList: FunctionComponent<Props> = ({ data, routine, title, columns }, ...props) => {
  if ((data.list === undefined && data.loading === false) || data.created === true || data.updated === true) {
    if (data.list !== undefined) {
      routine({ pageNumber: data.list.entity.page, itemNumber: data.list.entity.item });
    } else {
      routine({});
    }
  }

  const onPageChange = (newPage: number): void => {
    routine({ pageNumber: newPage });
  };

  const onSort = (column: any, direction: string): void => {
    routine({ sortKey: column.selector, sortDir: direction });
  };

  return <DefaultListComponent data={data} handlePageChange={onPageChange} handleSort={onSort} title={title} columns={columns} />;
};
