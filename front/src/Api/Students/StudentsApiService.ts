import { ApiService } from '../ApiService';
import IStudentModel from '../Datamodel/student/IStudentModel';
import { IPegeableStudentModel } from '../Datamodel/student/IPegeableStudentModel';

export class StudentApiService extends ApiService<IStudentModel, IPegeableStudentModel> {}
