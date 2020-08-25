import { ReactNode, OptionHTMLAttributes, DetailedHTMLProps } from 'react';
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

export type DetailedHTMLDropdownOptionProps = DetailedHTMLProps<
  OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>;

export interface StyledDropdownOptionProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeDropdownOptionProps extends ViewProps {}

export interface CustomDropdownOptionProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  theme?: Theme;
  value?: string;
  label?: string;
  disabled?: boolean;
}

export interface DropdownOptionProps
  extends CustomDropdownOptionProps,
    NativeDropdownOptionProps,
    StyledDropdownOptionProps {}
// TouchableOpacityProps {}

export const customDropdownOptionPropsKeys = new Set([
  'autoContrast',
  'children',
  'theme',
  'value',
  'label',
  'disabled'
]);

export const touchableOpacityPropsKeys = new Set([
  'activeOpacity',
  'delayLongPress',
  'delayPressIn',
  'delayPressOut',
  'hitSlop',
  'onBlur',
  'onFocus',
  'onLayout',
  'onLongPress',
  'pressRetentionOffset',
  'testID'
]);

export const nativeDropdownOptionPropsKeys = new Set<string>(['onValueChange']);

export interface SplitProps {
  customDropdownOptionProps: CustomDropdownOptionProps;
  nativeDropdownOptionProps: NativeDropdownOptionProps;
  styledDropdownOptionProps: StyledDropdownOptionProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: DropdownOptionProps): SplitProps {
  const styledDropdownOptionProps: { [key: string]: any } = {};
  const customDropdownOptionProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  const nativeDropdownOptionProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customDropdownOptionPropsKeys.has(key)) {
      customDropdownOptionProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeDropdownOptionPropsKeys.has(key)) {
      nativeDropdownOptionProps[key] = prop;
    } else {
      styledDropdownOptionProps[key] = prop;
    }
  });
  return {
    customDropdownOptionProps,
    nativeDropdownOptionProps,
    styledDropdownOptionProps,
    touchableOpacityProps
  };
}
