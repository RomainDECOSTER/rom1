import { ICampaignState } from './ICampaignRedux';
import { EntityRedux } from '../EntityRedux';
import ICampaignModel from '../../Api/Datamodel/ICampaignModel';
import { IPageableCampaignModel } from '../../Api/Datamodel/IPageableCampaignModel';
import {
  CampaignsListRoutine,
  CampaignDeleteRoutine,
  CampaignViewRoutine,
  CampaignUpdateRoutine,
  CampaignSortRoutine,
  CampaignsSearchRoutine,
  CampaignsCreateRoutine,
} from '../../Routines/CampaignRoutine';

export interface CampaignState extends ICampaignState {}

export class CampaignRedux extends EntityRedux<ICampaignModel, IPageableCampaignModel> {
  constructor() {
    super(CampaignsListRoutine, CampaignsCreateRoutine, CampaignDeleteRoutine, CampaignViewRoutine, CampaignUpdateRoutine, CampaignSortRoutine, CampaignsSearchRoutine);
  }
}
