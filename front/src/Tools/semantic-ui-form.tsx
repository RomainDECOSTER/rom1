import React from "react";
import { Form, Input, InputOnChangeData } from "semantic-ui-react";

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
  const handleChange = (e: React.MouseEvent<HTMLAnchorElement>, data: InputOnChangeData) => input.onChange(data.value);
  return (
    <Form.Field>
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
    </Form.Field>
  );
};
