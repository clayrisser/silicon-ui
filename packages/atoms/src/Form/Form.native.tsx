import React, { FC } from 'react';
import { Form as NativeBaseForm } from 'native-base';
import { layout, position, space } from 'styled-system';
import { FormProps, antiForwardFormPropsKeys, splitProps } from './formProps';
import { createStyled } from '../styled';

const StyledNativeBaseForm = createStyled<FormProps>(
  NativeBaseForm,
  [layout, position, space],
  antiForwardFormPropsKeys
);

const Form: FC<FormProps> = (props: FormProps) => {
  const { styledFormProps, customFormProps, nativeFormProps } = splitProps(
    props
  );
  return (
    <StyledNativeBaseForm
      {...styledFormProps}
      {...nativeFormProps}
      {...customFormProps}
    />
  );
};

Form.defaultProps = {};

export default Form;
