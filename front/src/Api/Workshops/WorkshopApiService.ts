import { ApiService } from '../ApiService';
import IWorkshopModel from '../Datamodel/IWorkshopModel';
import { IPageableWorkshopsModel } from '../Datamodel/IPageableWorkshopsModel';

export class WorkshopApiService extends ApiService<IWorkshopModel, IPageableWorkshopsModel> {}
