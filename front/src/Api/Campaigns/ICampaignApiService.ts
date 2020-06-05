import IApiService from '../IApiService';
import ICampaignModel from '../Datamodel/ICampaignModel';
import { IPageableCampaignModel } from '../Datamodel/IPageableCampaignModel';

export interface ICampaignApiService extends IApiService<ICampaignModel, IPageableCampaignModel> {}
