import { IEntityRedux, IEntitySate } from '../IEntityRedux';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';

export class IUserState implements IEntitySate<IUserModel, IPageableIUserModel> {}

export interface IUserRedux extends IEntityRedux<IUserModel, IPageableIUserModel> {}
