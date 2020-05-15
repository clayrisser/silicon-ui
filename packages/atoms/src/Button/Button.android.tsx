import React, { FC, ReactNode, Children } from 'react';
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
import ButtonProps, { StyledButtonProps } from './buttonProps';

const StyledView: StyledComponent<
  StyledButtonProps,
  StyledButtonProps,
  any
> = styled.View(
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
  if (!props.styled) {
    return (
      <NativeButton
        color={(props.color as unknown) as any}
        disabled={false}
        onPress={props.onPress!}
        title={props.children!}
      />
    );
  }
  return <StyledText {...clonedProps}>{props.children}</StyledText>;
};

Button.defaultProps = {
  backgroundColor: '#888888',
  borderColor: '#999999',
  borderWidth: 4,
  children: '',
  fontSize: 16,
  onPress: () => {},
  padding: 2,
  paddingTop: 3,
  styled: false,
  textAlign: 'center'
};

export default Button;
