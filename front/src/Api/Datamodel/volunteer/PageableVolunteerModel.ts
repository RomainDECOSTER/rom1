import PageableEntityModel from '../PageableEntityModel';
import IVolunteerModel from './IVolunteerModel';
import { IPegeableVolunteerModel } from './IPeageableVolunteerModel';

export default class PageableVolunteerModel extends PageableEntityModel<IVolunteerModel, IPegeableVolunteerModel> {
  constructor(pageableModel: IPegeableVolunteerModel) {
    super(pageableModel);
  }
}
