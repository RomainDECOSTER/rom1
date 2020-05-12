import IApiService from '../IApiService';
import IWorkshopModel from '../Datamodel/IWorkshopModel';
import { IPageableWorkshopsModel } from '../Datamodel/IPageableWorkshopsModel';

export interface IWorkshopsApiService extends IApiService<IWorkshopModel, IPageableWorkshopsModel> {}
