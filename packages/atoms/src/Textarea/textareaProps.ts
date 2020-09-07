import { DetailedHTMLProps, TextareaHTMLAttributes, ReactNode } from 'react';
import { NativeBase } from 'native-base';
import { Theme } from 'theme-ui';
import { ViewProps } from 'react-native';
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

// export interface NativeTextareaProps extends NativeBase.Textarea {}
// export interface NativeTextareaProps extends ViewProps {
//   rowSpan?: number;
//   bordered?: boolean;
//   underline?: boolean;
//   onChangeText?: any;
// }

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
  // required?: boolean;
  placeholder?: string;
  rows?: string;
  cols?: string;
  onChange?: any;
}

export interface NativeTextareaProps {
  rowSpan?: number;
  bordered?: boolean;
  underline?: boolean;
}

export interface TextareaProps
  extends CustomTextareaProps,
    NativeTextareaProps,
    NativeItemProps,
    StyledTextareaProps {}

export const customTextareaPropsKeys = new Set([
  'autoContrast',
  'theme',
  'disabled',
  'placeholder',
  'secureTextEntry',
  'keyboardType',
  'onFocus',
  'onChange',
  'minLength'
]);

export const nativeTextareaPropsKeys = new Set([
  'onChangeText',
  'rowSpan',
  'bordered',
  'placeholder',
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
}

export function splitProps(props: TextareaProps): SplitProps {
  const styledTextareaProps: { [key: string]: any } = {};
  const customTextareaProps: { [key: string]: any } = {};
  const nativeTextareaProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customTextareaPropsKeys.has(key)) {
      customTextareaProps[key] = prop;
    } else if (nativeTextareaPropsKeys.has(key)) {
      nativeTextareaProps[key] = prop;
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
    styledTextareaProps
  };
}

export const antiForwardTextareaPropsKeys = new Set<string>([]);
