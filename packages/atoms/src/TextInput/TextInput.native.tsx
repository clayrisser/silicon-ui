import React, { FC } from 'react';
import styled from '@emotion/primitives';
import { TextInput as NativeTextInput } from 'react-native';
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
import { TextInputProps, StyledTextInputProps } from './textInputProps';
import { Theme } from '../themes';

const StyledTextInput = styled(NativeTextInput)<StyledTextInputProps, Theme>(
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

const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  const color = useColor(props);

  const clonedProps = { color, ...props };
  delete clonedProps.autoContrast;
  delete clonedProps.theme;
  delete clonedProps.onMouseEnter;
  delete clonedProps.onMouseLeave;
  delete clonedProps.onMouseOver;

  return <StyledTextInput {...clonedProps} />;
};

TextInput.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
  backgroundColor: 'primary',
  borderRadius: 2,
  borderWidth: 0,
  fontSize: 2,
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  textAlign: 'center',
  width: '100%'
};

export default TextInput;
