import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import { TextareaProps, splitProps } from './textareaProps';

const HTMLTextarea: StyledComponent<any, TextareaProps, any> = styled.textarea(
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Textarea: FC<TextareaProps> = (props: TextareaProps) => {
  const {
    customTextareaProps,
    styledTextareaProps,
    nativeItemProps
  } = splitProps(props);

  return (
    <HTMLTextarea
      {...styledTextareaProps}
      {...nativeItemProps}
      {...(customTextareaProps as any)}
    />
  );
};

Textarea.defaultProps = {
  autoContrast: false,
  backgroundColor: 'inverseText',
  borderRadius: 0,
  borderWidth: 0,
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  width: '100%'
};

export default Textarea;
