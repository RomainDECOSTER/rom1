import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { store } from '../../store';
import { WorkshopsListRoutine } from '../../Routines/WorkshopsRoutine';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { Select, MenuItem, Typography } from '@material-ui/core';

const WorkshopSelectComponent = ({ workshopData, handleChange, path, data, ...props }) => {
  const menuItems = [];
  workshopData.forEach((workshop) => {
    menuItems.push(
      <MenuItem value={workshop._id} key={workshop._id}>
        {workshop.name}
      </MenuItem>,
    );
  });
  const onChange = (event) => {
    const options = event.target.value;
    handleChange(path, options);
  };
  let values = data || [];
  if (data !== undefined && typeof data[0] === 'object') {
    values = data.map((workshop) => workshop._id);
  }
  return (
    <>
      <Typography component={'h6'} variant={'h6'}>
        Ateliers
      </Typography>
      <Select id={'workshopSelect'} value={values} style={{ width: '100%' }} multiple={true} onChange={onChange}>
        {menuItems}
      </Select>
    </>
  );
};

const WorkshopSelectForm = withJsonFormsControlProps(WorkshopSelectComponent);

const WorkshopSelectContainer = ({ workshopData, ...props }) => {
  if ((workshopData.list === undefined && workshopData.loading === false) || workshopData.created === true || workshopData.updated === true) {
    store.dispatch(WorkshopsListRoutine(''));
  }
  if (workshopData.list !== undefined) {
    return <WorkshopSelectForm workshopData={workshopData.list.entity.data} {...props} />;
  } else {
    return <CircularProgress value={100} />;
  }
};

const mapStateToProps = (state) => {
  return {
    workshopData: state.workshops,
  };
};

export default connect(mapStateToProps)(WorkshopSelectContainer);
