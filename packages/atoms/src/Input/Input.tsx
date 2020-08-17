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
import useColor from '../hooks/useColor';
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
  const color = useColor(props);
  const { customInputProps, styledInputProps, nativeItemProps } = splitProps({
    ...props,
    color
  });
  function handleInput(e: any) {
    if (props.onFocus) props.onFocus(e.target.value);
  }
  return (
    <HTMLInput
      {...styledInputProps}
      {...nativeItemProps}
      {...(customInputProps as any)}
      onInput={handleInput}
      onChangeText={handleInput}
    />
  );
};

Input.defaultProps = {
  autoContrast: false,
  backgroundColor: 'inverseText',
  borderRadius: 2,
  borderWidth: 0,
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  width: '100%'
};

export default Input;
