import React, { FunctionComponent, useEffect } from 'react';
import { IEntitySate } from '../../Reducers/IEntityRedux';
import { Routine } from 'redux-saga-routines';
import { DefaultListComponent } from './DefaultListComponent';
import { State } from '../../Reducers';
import { connect } from 'react-redux';

interface Props {
  data: IEntitySate<any, any>;
  routine: Routine;
  sortRoutine: Routine;
  columns: any;
  title: string;
  defaultSortKey: string;
  defaultSortDir: string;
  hasCampaign: boolean;
  campaignId: string;
}

const DefaultListContainer: FunctionComponent<Props> = ({ data, routine, title, columns, sortRoutine, defaultSortKey, defaultSortDir, hasCampaign, campaignId, ...props }) => {
  useEffect(() => {
    let options: any = {};
    if (hasCampaign && campaignId !== undefined && campaignId !== '') {
      options.campaignId = campaignId;
    }
    if (data.list !== undefined) {
      options = { ...options, pageNumber: data.list.entity.page, itemNumber: data.list.entity.item };
      routine(options);
    } else {
      sortRoutine({ sortKey: defaultSortKey, sortDir: defaultSortDir });
      routine(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId, data.created, data.updated, data.deleted]);

  const onPageChange = (newPage: number): void => {
    let options: any = {};
    if (hasCampaign && campaignId !== undefined && campaignId !== '') {
      options.campaignId = campaignId;
    }
    routine({ ...options, pageNumber: newPage });
  };

  const onSort = (column: any, direction: string): void => {
    sortRoutine({ sortKey: column.selector, sortDir: direction });
    routine({ pageNumber: data.list.entity.page, itemNumber: data.list.entity.item });
  };

  return <DefaultListComponent data={data} handlePageChange={onPageChange} handleSort={onSort} title={title} columns={columns} />;
};

const mapsStateToProps = (state: State) => {
  return {
    campaignId: state.app.campaignSelected,
  };
};

export const DefaultList = connect(mapsStateToProps)(DefaultListContainer);
