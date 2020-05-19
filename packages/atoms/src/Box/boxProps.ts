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
import { Theme } from '../themes';

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
  activeOpacity?: number;
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  onFocus?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  onMouseOver?: () => any;
  onPress?: () => any;
  onPressIn?: () => any;
  onPressOut?: () => any;
  theme?: Theme;
}
