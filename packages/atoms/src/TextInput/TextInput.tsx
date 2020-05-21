import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
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
import { TextInputProps, StyledTextInputProps } from './textInputProps';

export type DetailedHTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const HTMLInput: StyledComponent<
  DetailedHTMLInputProps,
  StyledTextInputProps,
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

const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  const color = useColor(props);

  const clonedProps: TextInputProps = {
    color,
    ...props
  };
  delete clonedProps.autoContrast;
  delete clonedProps.onPress;
  delete clonedProps.onPressIn;
  delete clonedProps.onPressOut;
  delete clonedProps.styled;
  delete clonedProps.theme;
  delete clonedProps.uppercase;

  function handleClick(_e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    if (props.onPress) props.onPress();
  }

  function handleMouseDown(_e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    if (props.onPressIn) props.onPressIn();
  }

  function handleMouseUp(_e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    if (props.onPressOut) props.onPressOut();
  }

  return (
    <HTMLInput
      {...(clonedProps as DetailedHTMLInputProps)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

TextInput.defaultProps = {
  backgroundColor: 'primary',
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

export default styled(TextInput)`
  cursor: pointer;
  font-weight: 500;
  transition-duration: 0.25s;
  transition-property: opacity;
  :active {
    opacity: 0.8;
  }
  text-transform: ${({ uppercase }: TextInputProps) =>
    uppercase ? 'uppercase' : 'none'};
`;
