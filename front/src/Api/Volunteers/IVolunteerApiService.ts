import IApiService from '../IApiService';
import IVolunteerModel from '../Datamodel/volunteer/IVolunteerModel';
import { IPegeableVolunteerModel } from '../Datamodel/volunteer/IPeageableVolunteerModel';

export interface IVolunteerApiService extends IApiService<IVolunteerModel, IPegeableVolunteerModel> {}
