import React, { FC } from 'react';
import { NativeBase, Form as NativeBaseForm } from 'native-base';
import { layout, position, space, compose } from 'styled-system';
import { styled } from 'native-theme-ui';
import {
  FormProps,
  StyledFormProps,
  antiForwardFormPropsKeys,
  splitProps
} from './formProps';

const StyledNativeBaseForm = styled<StyledFormProps, NativeBase.Form>(
  NativeBaseForm,
  { forwardPropsBlacklist: antiForwardFormPropsKeys }
)(compose(layout, position, space));

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
