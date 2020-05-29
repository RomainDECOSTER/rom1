import IApiService from '../IApiService';
import IStudentModel from '../Datamodel/student/IStudentModel';
import { IPegeableStudentModel } from '../Datamodel/student/IPegeableStudentModel';

export interface IStudentApiService extends IApiService<IStudentModel, IPegeableStudentModel> {}
