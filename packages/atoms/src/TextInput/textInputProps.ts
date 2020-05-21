import { TextInputProps as NativeTextInputProps } from 'react-native';
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

export interface StyledTextInputProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface TextInputProps
  extends StyledTextInputProps,
    NativeTextInputProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  onFocus?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  onMouseOver?: () => any;
  onPress?: () => any;
  onPressIn?: () => any;
  onPressOut?: () => any;
  theme?: Theme;
}

export { NativeTextInputProps };
