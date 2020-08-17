import { ReactNode, SelectHTMLAttributes, DetailedHTMLProps } from 'react';
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

export type DetailedHTMLDropdownSelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export interface StyledDropdownSelectProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeDropdownSelectProps extends ViewProps {
  selectedValue?: string;
}

export interface CustomDropdownSelectProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  theme?: Theme;
  value?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  autofocus?: boolean;
  label?: string;
}

export interface DropdownSelectProps
  extends CustomDropdownSelectProps,
    NativeDropdownSelectProps,
    StyledDropdownSelectProps,
    TouchableOpacityProps {}

export const customDropdownSelectPropsKeys = new Set([
  'autoContrast',
  'children',
  'theme',
  'value',
  'disabled'
]);

export const touchableOpacityPropsKeys = new Set([
  'activeOpacity',
  'delayLongPress',
  'delayPressIn',
  'delayPressOut',
  'disabled',
  'hitSlop',
  'onBlur',
  'onFocus',
  'onPress',
  'onLayout',
  'onLongPress',
  'pressRetentionOffset',
  'testID'
]);

export const nativeDropdownSelectPropsKeys = new Set<string>([
  'onValueChange',
  'disabled',
  'onPress'
  // 'onPressIn',
  // 'onPressOut'
]);

export interface SplitProps {
  customDropdownSelectProps: CustomDropdownSelectProps;
  nativeDropdownSelectProps: NativeDropdownSelectProps;
  styledDropdownSelectProps: StyledDropdownSelectProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: DropdownSelectProps): SplitProps {
  const styledDropdownSelectProps: { [key: string]: any } = {};
  const customDropdownSelectProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  const nativeDropdownSelectProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customDropdownSelectPropsKeys.has(key)) {
      customDropdownSelectProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeDropdownSelectPropsKeys.has(key)) {
      nativeDropdownSelectProps[key] = prop;
    } else {
      styledDropdownSelectProps[key] = prop;
    }
  });
  return {
    customDropdownSelectProps,
    nativeDropdownSelectProps,
    styledDropdownSelectProps,
    touchableOpacityProps
  };
}
