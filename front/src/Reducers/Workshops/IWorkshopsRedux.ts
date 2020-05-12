import { IEntitySate, IEntityRedux } from '../IEntityRedux';
import IWorkshopModel from '../../Api/Datamodel/IWorkshopModel';
import { IPageableWorkshopsModel } from '../../Api/Datamodel/IPageableWorkshopsModel';

export interface IWorkshopsState extends IEntitySate<IWorkshopModel, IPageableWorkshopsModel> {}

export interface IWorkshopsRedux extends IEntityRedux<IWorkshopModel, IPageableWorkshopsModel> {}
