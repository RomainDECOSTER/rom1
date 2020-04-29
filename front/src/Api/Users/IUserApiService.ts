import IApiService from '../IApiService';
import IUserModel from '../Datamodel/IUserModel';
import { IPageableIUserModel } from '../Datamodel/IPageableIUserModel';

export interface IUserApiService extends IApiService<IUserModel, IPageableIUserModel> {}
