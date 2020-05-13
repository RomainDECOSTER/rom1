import { IWorkshopsState } from './IWorkshopsRedux';
import { EntityRedux } from '../EntityRedux';
import IWorkshopModel from '../../Api/Datamodel/IWorkshopModel';
import { IPageableWorkshopsModel } from '../../Api/Datamodel/IPageableWorkshopsModel';
import {
  WorkshopsListRoutine,
  WorkshopsCreateRoutine,
  WorkshopDeleteRoutine,
  WorkshopViewRoutine,
  WorkshopUpdateRoutine,
  WorkshopSortRoutine,
  WorkshopsSearchRoutine,
} from '../../Routines/WorkshopsRoutine';

export interface WorkshopsState extends IWorkshopsState {}

export class WorkshopsRedux extends EntityRedux<IWorkshopModel, IPageableWorkshopsModel> {
  constructor() {
    super(WorkshopsListRoutine, WorkshopsCreateRoutine, WorkshopDeleteRoutine, WorkshopViewRoutine, WorkshopUpdateRoutine, WorkshopSortRoutine, WorkshopsSearchRoutine);
  }
}
