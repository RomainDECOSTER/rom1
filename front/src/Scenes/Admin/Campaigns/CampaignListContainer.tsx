import React, { FunctionComponent } from 'react';
import { CampaignsListRoutine, CampaignSortRoutine, CampaignDeleteRoutine, CampaignViewRoutine } from '../../../Routines/CampaignRoutine';
import { Routine } from 'redux-saga-routines';
import { CampaignState } from '../../../Reducers/Campaigns/CampaignRedux';
import CampaignModel from '../../../Api/Datamodel/CampaignModel';
import { DefaultActions } from '../../../Components/DefaultActions/DefaultActions';
import { Routes } from '../../../Routes/Routes';
import { DefaultList } from '../../../Components/DefaultList/DefaultListContainer';
import { State } from '../../../Reducers';
import { connect } from 'react-redux';

interface Props {
  CampaignsListRoutine: Routine;
  CampaignSortRoutine: Routine;
  campaigns: CampaignState;
}

const columns = [
  {
    name: 'Nom',
    selector: 'name',
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true,
  },
  {
    name: 'Actions',
    cell: (row: CampaignModel) => {
      return <DefaultActions disabledView={true} row={row} more={false} path={Routes.admin.campaigns} DeleteRoutine={CampaignDeleteRoutine} ViewRoutine={CampaignViewRoutine} />;
    },
  },
];

const title = 'Campagnes listing';

const CampaignsContainer: FunctionComponent<Props> = ({ campaigns, CampaignSortRoutine, CampaignsListRoutine }) => {
  return (
    <DefaultList
      hasCampaign={false}
      columns={columns}
      data={campaigns}
      routine={CampaignsListRoutine}
      sortRoutine={CampaignSortRoutine}
      title={title}
      defaultSortKey={'description'}
      defaultSortDir={'desc'}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    campaigns: state.campaigns,
  };
};

export const CampaignsList = connect(mapsStateToProps, { CampaignsListRoutine, CampaignSortRoutine })(CampaignsContainer);
