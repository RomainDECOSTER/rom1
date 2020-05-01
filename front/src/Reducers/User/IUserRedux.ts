import { IEntityRedux, IEntitySate } from '../IEntityRedux';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';

export interface IUserState extends IEntitySate<IUserModel, IPageableIUserModel> {}

export interface IUserRedux extends IEntityRedux<IUserModel, IPageableIUserModel> {}
