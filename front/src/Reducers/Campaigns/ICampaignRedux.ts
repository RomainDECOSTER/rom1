import { IEntitySate, IEntityRedux } from '../IEntityRedux';
import ICampaignModel from '../../Api/Datamodel/ICampaignModel';
import { IPageableCampaignModel } from '../../Api/Datamodel/IPageableCampaignModel';

export interface ICampaignState extends IEntitySate<ICampaignModel, IPageableCampaignModel> {}

export interface ICampaignRedux extends IEntityRedux<ICampaignModel, IPageableCampaignModel> {}
