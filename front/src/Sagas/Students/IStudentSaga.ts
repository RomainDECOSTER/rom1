import { IEntitySaga } from '../IEntitySaga';
import IStudentModel from '../../Api/Datamodel/student/IStudentModel';
import { IPegeableStudentModel } from '../../Api/Datamodel/student/IPegeableStudentModel';

export interface IStudentSaga extends IEntitySaga<IStudentModel, IPegeableStudentModel> {}
