import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
  typography,
} from 'styled-system';

export type DetailedHTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface HTMLButtonProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface ButtonProps extends HTMLButtonProps {
  onClick: () => any;
  onMouseEnter: () => any;
  onMouseLeave: () => any;
  onMouseOver: () => any;
}

const HTMLButton: StyledComponent<
  DetailedHTMLButtonProps,
  HTMLButtonProps,
  object
> = styled.button(
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
  return <HTMLButton {...(clonedProps as DetailedHTMLButtonProps)} />;
};

Button.defaultProps = {
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseOver: () => {},
};

export default Button;
