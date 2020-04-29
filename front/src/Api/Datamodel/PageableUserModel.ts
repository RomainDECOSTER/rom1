import { IPageableIUserModel } from './IPageableIUserModel';
import PageableEntityModel from './PageableEntityModel';
import IUserModel from './IUserModel';

export default class PageableUserModel extends PageableEntityModel<IUserModel, IPageableIUserModel> {
  constructor(pageableModel: IPageableIUserModel) {
    super(pageableModel);
  }
}
