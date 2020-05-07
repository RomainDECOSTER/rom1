import React from 'react';
import { Input, FormControl } from '@material-ui/core';

interface Props {
  as: any;
  input: any;
  type: string;
  label: string;
  placeholder: string;
  meta: {
    touched: boolean;
    error: string;
    warning: string;
  };
}

export const SemanticFormField: React.FunctionComponent<Props> = ({ input, type, label, placeholder, meta: { touched, error, warning }, as: As = Input, ...props }) => {
  const handleChange = (e: any) => input.onChange(e.target.value);
  return (
    <FormControl>
      <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder} onChange={handleChange} />
      {touched &&
        ((error && (
          <span>
            <i>{error}</i>
          </span>
        )) ||
          (warning && (
            <span>
              <i>{warning}</i>
            </span>
          )))}
    </FormControl>
  );
};
