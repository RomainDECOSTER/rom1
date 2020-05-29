import { EntitySaga } from '../EntitySaga';
import IStudentModel from '../../Api/Datamodel/student/IStudentModel';
import { IPegeableStudentModel } from '../../Api/Datamodel/student/IPegeableStudentModel';
import { path } from 'ramda';
import { State } from '../../Reducers';
import { StudentsListRoutine, StudentsCreateRoutine, StudentDeleteRoutine, StudentViewRoutine, StudentUpdateRoutine, StudentsSearchRoutine } from '../../Routines/StudentRoutine';
import { StudentApiService } from '../../Api/Students/StudentsApiService';

export class StudentSaga extends EntitySaga<IStudentModel, IPegeableStudentModel> {
  constructor() {
    super(
      (state: State, key: string) => path(key.split('.'), Object(state.volunteers)),
      new StudentApiService('/students'),
      StudentsListRoutine,
      StudentsCreateRoutine,
      StudentDeleteRoutine,
      StudentViewRoutine,
      StudentUpdateRoutine,
      StudentsSearchRoutine,
    );
  }
}
