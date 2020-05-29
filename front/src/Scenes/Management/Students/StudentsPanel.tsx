import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { SimpleSearchComponent } from '../../../Components/SimpleSearch/Component';
import { StudentsSearchRoutine, StudentsListRoutine } from '../../../Routines/StudentRoutine';
import { StudentsList } from './StudentsListContainer';
import { connect } from 'react-redux';

interface Props {
  StudentsSearchRoutine: Routine;
  StudentsListRoutine: Routine;
}

const StudentsPanelComponent: FunctionComponent<Props> = ({ StudentsListRoutine, StudentsSearchRoutine }) => {
  return (
    <>
      <SimpleSearchComponent searchRoutine={StudentsSearchRoutine} listRoutine={StudentsListRoutine} keySearch={'last_name'} />
      <StudentsList />
    </>
  );
};

export const StudentsPanel = connect(null, { StudentsListRoutine, StudentsSearchRoutine })(StudentsPanelComponent);
