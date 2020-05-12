import { IEntitySaga } from '../IEntitySaga';
import IWorkshopModel from '../../Api/Datamodel/IWorkshopModel';
import { IPageableWorkshopsModel } from '../../Api/Datamodel/IPageableWorkshopsModel';

export interface IWorkshopsSaga extends IEntitySaga<IWorkshopModel, IPageableWorkshopsModel> {}
