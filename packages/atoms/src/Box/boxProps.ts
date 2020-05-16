import { ReactNode } from 'react';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

export interface StyledBoxProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface BoxProps extends StyledBoxProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  onClick?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  onMouseOver?: () => any;
  onPress?: () => any;
}
