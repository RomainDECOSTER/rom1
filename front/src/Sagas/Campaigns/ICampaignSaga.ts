import { IEntitySaga } from '../IEntitySaga';
import ICampaignModel from '../../Api/Datamodel/ICampaignModel';
import { IPageableCampaignModel } from '../../Api/Datamodel/IPageableCampaignModel';

export interface ICampaignSaga extends IEntitySaga<ICampaignModel, IPageableCampaignModel> {}
