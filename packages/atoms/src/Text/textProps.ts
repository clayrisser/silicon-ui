import { ReactNode } from 'react';
import {
  ColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';
import { Theme } from '../themes';

export interface StyledTextProps
  extends ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface TextProps extends StyledTextProps {
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
