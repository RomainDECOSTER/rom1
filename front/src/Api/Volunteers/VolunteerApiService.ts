import { ApiService } from '../ApiService';
import IVolunteerModel from '../Datamodel/volunteer/IVolunteerModel';
import { IPegeableVolunteerModel } from '../Datamodel/volunteer/IPeageableVolunteerModel';

export class VolunteerApiService extends ApiService<IVolunteerModel, IPegeableVolunteerModel> {}
