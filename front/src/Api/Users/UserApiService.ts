import { ApiService } from '../ApiService';
import { IUserApiService } from './IUserApiService';
import IUserModel from '../Datamodel/IUserModel';
import { IPageableIUserModel } from '../Datamodel/IPageableIUserModel';
export class UserApiService extends ApiService<IUserModel, IPageableIUserModel> implements IUserApiService {}
