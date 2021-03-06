import React, { FunctionComponent } from 'react';
import { StudentsState } from '../../../Reducers/Students/StudentRedux';
import { Routine } from 'redux-saga-routines';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';
import { StudentsListRoutine, StudentSortRoutine, StudentDeleteRoutine, StudentViewRoutine } from '../../../Routines/StudentRoutine';
import { State } from '../../../Reducers';
import { connect } from 'react-redux';
import { DefaultActions } from '../../../Components/DefaultActions/DefaultActions';
import { Routes } from '../../../Routes/Routes';
import StudentModel from '../../../Api/Datamodel/student/StudentModel';

interface Props {
  students: StudentsState;
  StudentsListRoutine: Routine;
  StudentSortRoutine: Routine;
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
    cell: (row: StudentModel) => {
      const hrefLink = `mailto:${row.generalInformation.email}`;
      return <a href={hrefLink}>{row.generalInformation.email}</a>;
    },
  },
  {
    name: 'Actions',
    cell: (row: StudentModel) => {
      return <DefaultActions disabledView={true} row={row} more={true} path={Routes.management.students} DeleteRoutine={StudentDeleteRoutine} ViewRoutine={StudentViewRoutine} />;
    },
  },
];

const title = 'Apprenants listing';

const StudentsContainer: FunctionComponent<Props> = ({ students, StudentsListRoutine, StudentSortRoutine, ...props }) => {
  return (
    <DefaultList
      hasCampaign={true}
      columns={columns}
      data={students}
      routine={StudentsListRoutine}
      sortRoutine={StudentSortRoutine}
      title={title}
      defaultSortKey={'generalInformation.last_name'}
      defaultSortDir={'asc'}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    students: state.students,
  };
};

export const StudentsList = connect(mapsStateToProps, { StudentsListRoutine, StudentSortRoutine })(StudentsContainer);
