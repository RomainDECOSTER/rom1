import React, { FunctionComponent } from 'react';
import { CampaignsCreateRoutine, CampaignUpdateRoutine } from '../../Routines/CampaignRoutine';
import { Routine } from 'redux-saga-routines';
import { CampaignState } from '../../Reducers/Campaigns/CampaignRedux';
import { CreateContainer } from '../../Components/FormContainer/FormContainer';
import { CampaignFormConfig } from '../../FromsConfig/Campaigns/config';
import { State } from '../../Reducers';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { connect } from 'react-redux';

interface PropsContainer {
  CampaignsCreateRoutine: Routine;
  CampaignUpdateRoutine: Routine;
  campaignData: CampaignState;
  hasCampaignDetail: boolean;
  campaign: CampaignState;
}

const CreateCampaignContainer: FunctionComponent<PropsContainer> = ({ CampaignUpdateRoutine, CampaignsCreateRoutine, campaign, campaignData, hasCampaignDetail }) => {
  return (
    <CreateContainer
      createRoutine={CampaignsCreateRoutine}
      updateRoutine={CampaignUpdateRoutine}
      hasEntityDetails={hasCampaignDetail}
      entity={{ campaign: campaign }}
      entityFormData={campaignData}
      formTitle={'Ajouter une campagne'}
      formConfig={CampaignFormConfig}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    campaignData: extractData(state.jsonforms.core).campaign,
    hasCampaignDetail: state.campaigns.details !== undefined,
    campaign: state.campaigns.details !== undefined ? state.campaigns.details : {},
  };
};

export const CreateCampaign = connect(mapsStateToProps, { CampaignsCreateRoutine, CampaignUpdateRoutine })(CreateCampaignContainer);
