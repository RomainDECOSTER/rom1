import React, { FunctionComponent } from 'react';
import { WorkshopsState } from '../../../Reducers/Workshops/WorkshopsRedux';
import { Routine } from 'redux-saga-routines';
import WorkshopModel from '../../../Api/Datamodel/WorkshopModel';
import { DefaultActions } from '../../../Components/DefaultActions/DefaultActions';
import { Routes } from '../../../Routes/Routes';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';
import { State } from '../../../Reducers';
import { connect } from 'react-redux';
import { WorkshopsListRoutine, WorkshopSortRoutine, WorkshopDeleteRoutine, WorkshopViewRoutine } from '../../../Routines/WorkshopsRoutine';

interface Props {
  workshops: WorkshopsState;
  WorkshopsListRoutine: Routine;
  WorkshopSortRoutine: Routine;
}

const columns = [
  {
    name: 'Dénomination',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Actions',
    cell: (row: WorkshopModel) => {
      return <DefaultActions disabledView={false} row={row} more={false} path={Routes.admin.workshops} DeleteRoutine={WorkshopDeleteRoutine} ViewRoutine={WorkshopViewRoutine} />;
    },
  },
];

const title = 'Atelier listing';

const WorkshopsContainer: FunctionComponent<Props> = ({ workshops, WorkshopsListRoutine, WorkshopSortRoutine }, ...props) => {
  return <DefaultList columns={columns} data={workshops} routine={WorkshopsListRoutine} sortRoutine={WorkshopSortRoutine} title={title} defaultSortKey={'name'} defaultSortDir={'asc'} />;
};

const mapStateToProps = (state: State) => {
  return {
    workshops: state.workshops,
  };
};

export const WorkshopsList = connect(mapStateToProps, { WorkshopsListRoutine, WorkshopSortRoutine })(WorkshopsContainer);
