import React, { FC } from 'react';
import { NativeBase, Form as NativeBaseForm } from 'native-base';
import { layout, position, space, compose } from 'styled-system';
import {
  FormProps,
  NativeFormProps,
  antiForwardFormPropsKeys,
  splitProps
} from './formProps';
import { createStyled } from '../styled';

const StyledNativeBaseForm = createStyled<NativeFormProps, NativeBase.Form>(
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
