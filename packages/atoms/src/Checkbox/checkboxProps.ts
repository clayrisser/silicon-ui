import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
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

export type DetailedHTMLCheckBoxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface StyledCheckBoxProps
  extends BackgroundProps,
    BorderProps,
    // ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeCheckBoxProps extends NativeBase.CheckBox {}

export interface NativeItemProps extends Omit<NativeBase.Item, 'style'> {}

export interface CustomCheckBoxProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  type?: string;
  children?: ReactNode | string;
  checked?: boolean;
  autoFocus?: boolean;
  indeterminate?: boolean;
}

export interface CheckBoxProps
  extends CustomCheckBoxProps,
    NativeCheckBoxProps,
    NativeItemProps,
    StyledCheckBoxProps {}

export const customCheckBoxPropsKeys = new Set([
  'autoContrast',
  'theme',
  'disabled',
  'checked',
  'onChange'
]);

export const nativeCheckBoxPropsKeys = new Set([
  'error',
  'type',
  'last',
  'onPress',
  'onPressIn',
  'onPressOut',
  'rounded',
  'success',
  'underline',
  'checked',
  'disabled',
  'onValueChange',
  'value'
]);

export const nativeItemPropKeys = new Set<string>([]);

export interface SplitProps {
  customCheckBoxProps: CustomCheckBoxProps;
  nativeCheckBoxProps: NativeCheckBoxProps;
  nativeItemProps: NativeItemProps;
  styledCheckBoxProps: StyledCheckBoxProps;
}

export function splitProps(props: CheckBoxProps): SplitProps {
  const styledCheckBoxProps: { [key: string]: any } = {};
  const customCheckBoxProps: { [key: string]: any } = {};
  const nativeCheckBoxProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customCheckBoxPropsKeys.has(key)) {
      customCheckBoxProps[key] = prop;
    } else if (nativeCheckBoxPropsKeys.has(key)) {
      nativeCheckBoxProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledCheckBoxProps[key] = prop;
    }
  });
  return {
    customCheckBoxProps,
    nativeCheckBoxProps,
    nativeItemProps,
    styledCheckBoxProps
  };
}

export const antiForwardCheckBoxPropsKeys = new Set<string>([]);
