import { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';
import { TouchableOpacityProps, ViewProps } from 'react-native';
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

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface StyledBoxProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps,
    ViewProps {}

export interface CustomBoxProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  theme?: Theme;
}

export interface BoxProps
  extends CustomBoxProps,
    StyledBoxProps,
    TouchableOpacityProps {}

export const customBoxPropsKeys = new Set(['autoContrast', 'theme']);

export const touchableOpacityPropsKeys = new Set([
  'activeOpacity',
  'delayLongPress',
  'delayPressIn',
  'delayPressOut',
  'disabled',
  'hitSlop',
  'onBlur',
  'onFocus',
  'onLayout',
  'onLongPress',
  'onPress',
  'onPressIn',
  'onPressOut',
  'style',
  'pressRetentionOffset',
  'testID'
]);

export function splitProps(
  props: BoxProps
): [StyledBoxProps, CustomBoxProps, TouchableOpacityProps] {
  const styledBoxProps: { [key: string]: any } = {};
  const customBoxProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customBoxPropsKeys.has(key)) {
      customBoxProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else {
      styledBoxProps[key] = prop;
    }
  });
  return [styledBoxProps, customBoxProps, touchableOpacityProps];
}
