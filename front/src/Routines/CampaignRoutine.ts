import { createRoutine } from 'redux-saga-routines';

export const CampaignsListRoutine = createRoutine('CAMPAIGNS_LIST');
export const CampaignsCreateRoutine = createRoutine('CAMPAIGNS_CREATE');
export const CampaignDeleteRoutine = createRoutine('CAMPAIGN_DELETE');
export const CampaignViewRoutine = createRoutine('CAMPAIGN_VIEW');
export const CampaignUpdateRoutine = createRoutine('CAMPAIGN_UPDATE');
export const CampaignSortRoutine = createRoutine('CAMPAIGN_SORT');
export const CampaignsSearchRoutine = createRoutine('CAMPAIGNS_SEARCH');
