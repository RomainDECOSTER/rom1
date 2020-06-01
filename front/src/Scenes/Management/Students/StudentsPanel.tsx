import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { SimpleSearchComponent } from '../../../Components/SimpleSearch/Component';
import { StudentsSearchRoutine, StudentsListRoutine, StudentViewRoutine } from '../../../Routines/StudentRoutine';
import { StudentsList } from './StudentsListContainer';
import { connect } from 'react-redux';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { store } from '../../../store';
import { Add } from '@material-ui/icons';

interface Props {
  StudentsSearchRoutine: Routine;
  StudentsListRoutine: Routine;
}

const StudentsPanelComponent: FunctionComponent<Props> = ({ StudentsListRoutine, StudentsSearchRoutine }) => {
  return (
    <>
      <SimpleSearchComponent searchRoutine={StudentsSearchRoutine} listRoutine={StudentsListRoutine} keySearch={'last_name'} />
      <StudentsList />
      <Fab component={Link} to={Routes.management.students.create.path} color={'secondary'} onClick={() => store.dispatch(StudentViewRoutine(''))}>
        <Add />
      </Fab>
    </>
  );
};

export const StudentsPanel = connect(null, { StudentsListRoutine, StudentsSearchRoutine })(StudentsPanelComponent);
