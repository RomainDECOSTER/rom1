import PageableEntityModel from './PageableEntityModel';
import IWorkshopModel from './IWorkshopModel';
import { IPageableWorkshopsModel } from './IPageableWorkshopsModel';

export default class PageableWorkshopsModel extends PageableEntityModel<IWorkshopModel, IPageableWorkshopsModel> {
  constructor(pageableModel: IPageableWorkshopsModel) {
    super(pageableModel);
  }
}
