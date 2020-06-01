import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { StudentsState } from '../../../Reducers/Students/StudentRedux';
import { CreateContainer } from '../../../Components/FormContainer/FormContainer';
import { StudentFromConfig } from '../../../FromsConfig/Students/config';
import { State } from '../../../Reducers';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { connect } from 'react-redux';
import { StudentsCreateRoutine, StudentUpdateRoutine } from '../../../Routines/StudentRoutine';

interface PropsContainer {
  StudentsCreateRoutine: Routine;
  StudentUpdateRoutine: Routine;
  studentData: StudentsState;
  hasStudentDetail: boolean;
  student: StudentsState;
}

const CreateStudentContainer: FunctionComponent<PropsContainer> = ({ StudentUpdateRoutine, StudentsCreateRoutine, hasStudentDetail, student, studentData, ...props }) => {
  return (
    <CreateContainer
      createRoutine={StudentsCreateRoutine}
      updateRoutine={StudentUpdateRoutine}
      hasEntityDetails={hasStudentDetail}
      entity={student}
      entityFormData={studentData}
      formTitle={'Ajouter un apprenant'}
      formConfig={StudentFromConfig}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    studentData: extractData(state.jsonforms.core).student,
    hasStudentDetail: state.students.details !== undefined,
    student: state.students.details !== undefined ? state.students.details : {},
  };
};

export const CreateStudent = connect(mapsStateToProps, { StudentsCreateRoutine, StudentUpdateRoutine })(CreateStudentContainer);
