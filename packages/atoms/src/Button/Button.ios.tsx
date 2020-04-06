import styled, { StyledComponent } from '@emotion/primitives';
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

export interface ButtonProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

const Button: StyledComponent<ButtonProps, ButtonProps, any> = styled.View(
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

Button.defaultProps = {};

export default Button;
