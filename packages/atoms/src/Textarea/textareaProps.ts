import { DetailedHTMLProps, TextareaHTMLAttributes, ReactNode } from 'react';
import { NativeBase } from 'native-base';
import { Theme } from 'theme-ui';
import { TouchableOpacityProps } from 'react-native';
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

export type DetailedHTMLTextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface StyledTextareaProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeTextareaProps extends NativeBase.Textarea {}

export interface NativeItemProps extends Omit<NativeBase.Item, 'style'> {
  secureTextEntry?: boolean;
  placeholder?: string;
}

export interface CustomTextareaProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  disabled?: boolean;
  minLength?: string;
  value?: string;
  children?: ReactNode;
  onPress?: any;
  placeholder?: string;
  rows?: string;
  cols?: string;
}

export interface TextareaProps
  extends CustomTextareaProps,
    NativeTextareaProps,
    NativeItemProps,
    TouchableOpacityProps,
    StyledTextareaProps {}

export const customTextareaPropsKeys = new Set([
  'autoContrast',
  'theme',
  'disabled',
  'placeholder',
  'secureTextEntry',
  'keyboardType',
  'onChange',
  'minLength'
]);

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
export const nativeTextareaPropsKeys = new Set([
  'onChangeText',
  'rowSpan',
  'bordered',
  'underline'
]);

export const nativeItemPropKeys = new Set([
  'bordered',
  'error',
  'type',
  'fixedLabel',
  'floatingLabel',
  'inlineLabel',
  'last',
  'onPress',
  'onFocus',
  'picker',
  'placeholder',
  'placeholderLabel',
  'regular',
  'rounded',
  'secureTextEntry',
  'stackedLabel',
  'success',
  'underline'
]);

export interface SplitProps {
  customTextareaProps: CustomTextareaProps;
  nativeTextareaProps: NativeTextareaProps;
  nativeItemProps: NativeItemProps;
  styledTextareaProps: StyledTextareaProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: TextareaProps): SplitProps {
  const styledTextareaProps: { [key: string]: any } = {};
  const customTextareaProps: { [key: string]: any } = {};
  const nativeTextareaProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};

  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customTextareaPropsKeys.has(key)) {
      customTextareaProps[key] = prop;
    } else if (nativeTextareaPropsKeys.has(key)) {
      nativeTextareaProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledTextareaProps[key] = prop;
    }
  });
  return {
    customTextareaProps,
    nativeTextareaProps,
    nativeItemProps,
    styledTextareaProps,
    touchableOpacityProps
  };
}

export const antiForwardTextareaPropsKeys = new Set<string>([]);
