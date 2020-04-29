import { IEntitySaga } from '../IEntitySaga';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';
import IUserModel from '../../Api/Datamodel/IUserModel';

export interface IUserSaga extends IEntitySaga<IUserModel, IPageableIUserModel> {}
