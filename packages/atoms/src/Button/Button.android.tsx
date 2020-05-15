import React, { FC, ReactNode } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { Button as ReactButton } from 'react-native';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
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

export interface NativeButtonProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

const NativeView: StyledComponent<
  NativeButtonProps,
  NativeButtonProps,
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

export interface ButtonProps extends NativeButtonProps {
  children?: string;
  onPress?: () => any;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const clonedProps = { ...props };
  return (
    <NativeView {...clonedProps}>
      <ReactButton onPress={props.onPress!} title={props.children || ''} />
    </NativeView>
  );
};

Button.defaultProps = {
  onPress: () => {}
};

export default Button;
