import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { compose, layout, position, space } from 'styled-system';
import { FormProps, DetailedHTMLFormProps, splitProps } from './formProps';

const HTMLForm: StyledComponent<
  DetailedHTMLFormProps,
  FormProps,
  object
> = styled.form(compose(layout, position, space));

const Form: FC<FormProps> = (props: FormProps) => {
  const { styledFormProps, customFormProps, webFormProps } = splitProps(props);
  return (
    <HTMLForm {...styledFormProps} {...customFormProps} {...webFormProps} />
  );
};

Form.defaultProps = {};

export default Form;
