import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { MenuItem, InputLabel } from '@material-ui/core';
const MultiSelect = ({ handleChange, path, ...rest }) => {
  const items = rest.schema.enum.map((name) => (
    <MenuItem key={name} value={name}>
      {name}
    </MenuItem>
  ));
  const [values, setValues] = useState([]);
  return (
    <div className={'filed'} style={{ marginBottom: 15 + '%' }}>
      <InputLabel>{rest.label}</InputLabel>
      <Select
        onChange={(selected) => {
          handleChange(path, selected.target.value);
          setValues(selected.target.value);
        }}
        multiple={true}
        value={values}
      >
        {items}
      </Select>
    </div>
  );
};
export default withJsonFormsControlProps(MultiSelect);
