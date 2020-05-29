import { IEntitySate, IEntityRedux } from '../IEntityRedux';
import IStudentModel from '../../Api/Datamodel/student/IStudentModel';
import { IPegeableStudentModel } from '../../Api/Datamodel/student/IPegeableStudentModel';

export interface IStudentSate extends IEntitySate<IStudentModel, IPegeableStudentModel> {}

export interface IStudentRedux extends IEntityRedux<IStudentModel, IPegeableStudentModel> {}
