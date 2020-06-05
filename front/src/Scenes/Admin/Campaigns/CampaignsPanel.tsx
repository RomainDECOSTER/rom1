import React, { FunctionComponent } from 'react';
import { CampaignsSearchRoutine, CampaignsListRoutine, CampaignViewRoutine } from '../../../Routines/CampaignRoutine';
import { Routine } from 'redux-saga-routines';
import { SimpleSearchComponent } from '../../../Components/SimpleSearch/Component';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { store } from '../../../store';
import { Add } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
import { connect } from 'react-redux';
import { CampaignsList } from './CampaignListContainer';

interface Props {
  CampaignsSearchRoutine: Routine;
  CampaignsListRoutine: Routine;
}

const CampaignsPanelComponent: FunctionComponent<Props> = ({ CampaignsSearchRoutine, CampaignsListRoutine }) => {
  return (
    <>
      <SimpleSearchComponent searchRoutine={CampaignsSearchRoutine} listRoutine={CampaignsListRoutine} keySearch={'description'} />
      <CampaignsList />
      <Fab component={Link} to={Routes.admin.campaigns.create.path} color={'secondary'} onClick={() => store.dispatch(CampaignViewRoutine(''))}>
        <Add />
      </Fab>
    </>
  );
};

export const CampaignPanel = connect(null, { CampaignsListRoutine, CampaignsSearchRoutine })(CampaignsPanelComponent);
