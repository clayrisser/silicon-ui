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
import { InputProps, DetailedHTMLInputProps, splitProps } from './inputProps';

const HTMLInput: StyledComponent<
  DetailedHTMLInputProps,
  InputProps,
  object
> = styled.input(
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

const Input: FC<InputProps> = (props: InputProps) => {
  const { customInputProps, styledInputProps, nativeItemProps } = splitProps(
    props
  );
  function handleInput(e: any) {
    if (props.onChangeText) props.onChangeText(e.target.value);
  }
  return (
    <HTMLInput
      {...styledInputProps}
      {...nativeItemProps}
      {...(customInputProps as any)}
      onChange={handleInput}
      onChangeText={handleInput}
    />
  );
};

Input.defaultProps = {
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

export default Input;
