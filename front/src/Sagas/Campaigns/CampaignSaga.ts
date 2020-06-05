import { EntitySaga } from '../EntitySaga';
import ICampaignModel from '../../Api/Datamodel/ICampaignModel';
import { IPageableCampaignModel } from '../../Api/Datamodel/IPageableCampaignModel';
import { State } from '../../Reducers';
import { path } from 'ramda';
import { CampaignApiService } from '../../Api/Campaigns/CampaignApiService';
import { CampaignsListRoutine, CampaignsCreateRoutine, CampaignDeleteRoutine, CampaignViewRoutine, CampaignUpdateRoutine, CampaignsSearchRoutine } from '../../Routines/CampaignRoutine';

export class CampaignSaga extends EntitySaga<ICampaignModel, IPageableCampaignModel> {
  constructor() {
    super(
      (state: State, key: string) => path(key.split('.'), Object(state.campaigns)),
      new CampaignApiService('/campaigns'),
      CampaignsListRoutine,
      CampaignsCreateRoutine,
      CampaignDeleteRoutine,
      CampaignViewRoutine,
      CampaignUpdateRoutine,
      CampaignsSearchRoutine,
    );
  }
}
