import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { Button as NativeButton } from 'react-native';
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
import { ButtonProps, StyledButtonProps } from './buttonProps';

const StyledText: StyledComponent<
  StyledButtonProps,
  StyledButtonProps,
  any
> = styled.Text(
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

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const clonedProps = { ...props };
  if (props.styled) {
    return <StyledText {...clonedProps}>{props.children}</StyledText>;
  }
  return (
    <NativeButton
      color={(props.color as unknown) as any}
      disabled={false}
      onPress={props.onPress!}
      title={props.children || ''}
    />
  );
};

Button.defaultProps = {
  backgroundColor: '#888888',
  borderColor: '#999999',
  borderWidth: 4,
  fontSize: 18,
  styled: false,
  onPress: () => {},
  padding: 2
};

export default Button;
