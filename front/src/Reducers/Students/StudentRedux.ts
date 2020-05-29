import { IStudentSate } from './IStudentRedux';
import { EntityRedux } from '../EntityRedux';
import IStudentModel from '../../Api/Datamodel/student/IStudentModel';
import { IPegeableStudentModel } from '../../Api/Datamodel/student/IPegeableStudentModel';
import { StudentsListRoutine, StudentsCreateRoutine, StudentDeleteRoutine, StudentViewRoutine, StudentUpdateRoutine, StudentSortRoutine, StudentsSearchRoutine } from '../../Routines/StudentRoutine';

export interface StudentsState extends IStudentSate {}

export class StudentsRedux extends EntityRedux<IStudentModel, IPegeableStudentModel> {
  constructor() {
    super(StudentsListRoutine, StudentsCreateRoutine, StudentDeleteRoutine, StudentViewRoutine, StudentUpdateRoutine, StudentSortRoutine, StudentsSearchRoutine);
  }
}
