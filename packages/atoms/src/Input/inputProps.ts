import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { NativeBase } from 'native-base';
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

export type DetailedHTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface StyledInputProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeInputProps extends NativeBase.Input {}

export interface NativeItemProps extends Omit<NativeBase.Item, 'style'> {}

export interface CustomInputProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
}

export interface InputProps
  extends CustomInputProps,
    NativeInputProps,
    NativeItemProps,
    StyledInputProps {}

export const customInputPropsKeys = new Set(['autoContrast', 'theme']);

export const nativeInputPropsKeys = new Set<string>([]);

export const nativeItemPropKeys = new Set([
  'bordered',
  'disabled',
  'error',
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
  customInputProps: CustomInputProps;
  nativeInputProps: NativeInputProps;
  nativeItemProps: NativeItemProps;
  styledInputProps: StyledInputProps;
}

export function splitProps(props: InputProps): SplitProps {
  const styledInputProps: { [key: string]: any } = {};
  const customInputProps: { [key: string]: any } = {};
  const nativeInputProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customInputPropsKeys.has(key)) {
      customInputProps[key] = prop;
    } else if (nativeInputPropsKeys.has(key)) {
      nativeInputProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledInputProps[key] = prop;
    }
  });
  return {
    customInputProps,
    nativeInputProps,
    nativeItemProps,
    styledInputProps
  };
}

export const antiForwardInputPropsKeys = new Set<string>([]);
