import { ApiService } from '../ApiService';
import ICampaignModel from '../Datamodel/ICampaignModel';
import { IPageableCampaignModel } from '../Datamodel/IPageableCampaignModel';
export class CampaignApiService extends ApiService<ICampaignModel, IPageableCampaignModel> {}
