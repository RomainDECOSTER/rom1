import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { store } from '../../store';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { Select, MenuItem, Typography } from '@material-ui/core';
import { CampaignsListRoutine } from '../../Routines/CampaignRoutine';

const CampaignSelectComponent = ({ campaignData, handleChange, path, data, ...props }) => {
  console.log(data, campaignData, props);
  const menuItems = [];
  campaignData.forEach((campaign) => {
    menuItems.push(
      <MenuItem value={campaign._id} key={campaign._id}>
        {campaign.name}
      </MenuItem>,
    );
  });
  const onChange = (event) => {
    const options = event.target.value;
    handleChange(path, options);
  };
  let value = undefined;
  if (data !== undefined && typeof data === 'object') {
    value = data._id;
  } else {
    value = data;
  }
  return (
    <>
      <Typography component={'h6'} variant={'h6'}>
        Campagne
      </Typography>
      <Select id={'campaignSelect'} value={value || ''} style={{ width: '100%' }} onChange={onChange} disabled={data !== undefined && typeof data === 'object'}>
        {menuItems}
      </Select>
    </>
  );
};

const CampaignSelectForm = withJsonFormsControlProps(CampaignSelectComponent);

const CampaignSelectContainer = ({ campaignData, ...props }) => {
  if ((campaignData.list === undefined && campaignData.loading === false) || campaignData.created === true || campaignData.updated === true) {
    store.dispatch(CampaignsListRoutine(''));
  }
  if (campaignData.list !== undefined) {
    return <CampaignSelectForm campaignData={campaignData.list.entity.data} {...props} />;
  } else {
    return <CircularProgress value={100} />;
  }
};

const mapStateToProps = (state) => {
  return {
    campaignData: state.campaigns,
  };
};

export default connect(mapStateToProps)(CampaignSelectContainer);
