import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Theme } from 'theme-ui';
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

export type DetailedHTMLIconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export interface StyledIconProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeIconProps extends ViewProps {}

export interface CustomIconProps {
  theme?: Theme;
  name?: string;
  ios?: string;
  android?: string;
  active?: boolean;
  color?: string;
  class?: string;
  type?: string;
}

export interface IconProps
  extends CustomIconProps,
    NativeIconProps,
    TouchableOpacityProps,
    StyledIconProps {}

export const customIconPropsKeys = new Set(['color', 'class']);
export const touchableOpacityPropsKeys = new Set([
  'activeOpacity',
  'delayLongPress',
  'delayPressIn',
  'delayPressOut',
  'hitSlop',
  'onBlur',
  'onFocus',
  'onPress',
  'onLayout',
  'onLongPress',
  'pressRetentionOffset'
]);

export const nativeIconPropsKeys = new Set([
  'name',
  'ios',
  'android',
  'active',
  'color',
  'type',
  'onChangeText'
]);

export interface SplitProps {
  customIconProps: CustomIconProps;
  nativeIconProps: NativeIconProps;
  styledIconProps: StyledIconProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: IconProps): SplitProps {
  const styledIconProps: { [key: string]: any } = {};
  const customIconProps: { [key: string]: any } = {};
  const nativeIconProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customIconPropsKeys.has(key)) {
      customIconProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeIconPropsKeys.has(key)) {
      nativeIconProps[key] = prop;
    } else {
      styledIconProps[key] = prop;
    }
  });
  return {
    customIconProps,
    nativeIconProps,
    styledIconProps,
    touchableOpacityProps
  };
}

export const antiForwardIconPropsKeys = new Set<string>([]);
