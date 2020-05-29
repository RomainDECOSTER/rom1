import { createRoutine } from 'redux-saga-routines';

export const StudentsListRoutine = createRoutine('STUDENTS_LIST');
export const StudentsCreateRoutine = createRoutine('STUDENTS_CREATE');
export const StudentDeleteRoutine = createRoutine('STUDENT_DELETE');
export const StudentViewRoutine = createRoutine('STUDENT_VIEW');
export const StudentUpdateRoutine = createRoutine('STUDENT_UPDATE');
export const StudentSortRoutine = createRoutine('STUDENT_SORT');
export const StudentsSearchRoutine = createRoutine('STUDENTS_SEARCH');
