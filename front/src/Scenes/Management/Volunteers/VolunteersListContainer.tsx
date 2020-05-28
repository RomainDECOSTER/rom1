import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { VolunteersState } from '../../../Reducers/Volunteers/VoluteersRedux';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';
import { VolunteersListRoutine, VolunteerSortRoutine } from '../../../Routines/VolunteersRoutine';
import { State } from '../../../Reducers';
import { connect } from 'react-redux';

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
