import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { VolunteersState } from '../../../Reducers/Volunteers/VoluteersRedux';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';
import { VolunteersListRoutine, VolunteerSortRoutine, VolunteerDeleteRoutine, VolunteerViewRoutine } from '../../../Routines/VolunteersRoutine';
import { State } from '../../../Reducers';
import { connect } from 'react-redux';
import { DefaultActions } from '../../../Components/DefaultActions/DefaultActions';
import { Routes } from '../../../Routes/Routes';
import VolunteerModel from '../../../Api/Datamodel/volunteer/VolunteerModel';

interface Props {
  volunteers: VolunteersState;
  VolunteersListRoutine: Routine;
  VolunteerSortRoutine: Routine;
}

const columns = [
  {
    name: 'Téléphone',
    selector: 'generalInformation.mobile',
  },
  {
    name: 'Nom',
    selector: 'generalInformation.last_name',
    sortable: true,
  },
  {
    name: 'Prénom',
    selector: 'generalInformation.first_name',
  },
  {
    name: 'Email',
    selector: 'generalInformation.email',
  },
  {
    name: 'Actions',
    cell: (row: VolunteerModel) => {
      return <DefaultActions disabledView={true} row={row} more={false} path={Routes.management.volunteers} DeleteRoutine={VolunteerDeleteRoutine} ViewRoutine={VolunteerViewRoutine} />;
    },
  },
];

const title = 'Bénévole Listing';

const VolunteersContainer: FunctionComponent<Props> = ({ volunteers, VolunteersListRoutine, VolunteerSortRoutine, ...props }) => {
  return (
    <DefaultList
      columns={columns}
      data={volunteers}
      routine={VolunteersListRoutine}
      sortRoutine={VolunteerSortRoutine}
      title={title}
      defaultSortKey={'generalInformation.last_name'}
      defaultSortDir={'asc'}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    volunteers: state.volunteers,
  };
};

export const VolunteersList = connect(mapsStateToProps, { VolunteersListRoutine, VolunteerSortRoutine })(VolunteersContainer);
