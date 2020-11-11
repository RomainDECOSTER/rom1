import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { StudentsState } from '../../../Reducers/Students/StudentRedux';
import { CreateContainer } from '../../../Components/FormContainer/FormContainer';
import { StudentFromConfig } from '../../../FromsConfig/Students/config';
import { State } from '../../../Reducers';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { connect } from 'react-redux';
import { StudentsCreateRoutine, StudentUpdateRoutine } from '../../../Routines/StudentRoutine';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface PropsContainer extends RouteComponentProps<any, any, any> {
  StudentsCreateRoutine: Routine;
  StudentUpdateRoutine: Routine;
  studentData: StudentsState;
  hasStudentDetail: boolean;
  student: any;
}

const CreateStudentContainer: FunctionComponent<PropsContainer> = ({ StudentUpdateRoutine, StudentsCreateRoutine, hasStudentDetail, student, studentData, ...props }) => {
  if (props.location.state !== undefined && props.location.state !== null && props.location.state.reRegister !== undefined && props.location.state.reRegister === true) {
    delete student._id;
    delete student.campaign;
    student.initial_level = student.final_level;
    delete student.final_level;
    delete student.registrationInformation.date;
  }
  return (
    <CreateContainer
      createRoutine={StudentsCreateRoutine}
      updateRoutine={StudentUpdateRoutine}
      hasEntityDetails={hasStudentDetail}
      entity={{ student: student }}
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

export const CreateStudent = connect(mapsStateToProps, { StudentsCreateRoutine, StudentUpdateRoutine })(withRouter(CreateStudentContainer));
