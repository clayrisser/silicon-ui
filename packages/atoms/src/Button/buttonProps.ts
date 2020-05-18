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

export interface StyledButtonProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface ButtonProps extends StyledButtonProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: string;
  onFocus?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  onMouseOver?: () => any;
  onPress?: () => any;
  onPressIn?: () => any;
  onPressOut?: () => any;
  styled?: boolean;
  theme?: Theme;
  uppercase?: boolean;
}
