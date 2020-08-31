import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { NativeBase } from 'native-base';
import {
  BorderProps,
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
  extends BorderProps,
    // ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeCheckBoxProps extends NativeBase.CheckBox {}

export interface CustomCheckBoxProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  type?: string;
  children?: ReactNode | string;
  checked?: boolean;
}

export interface CheckBoxProps
  extends CustomCheckBoxProps,
    NativeCheckBoxProps,
    StyledCheckBoxProps {
  disabled?: boolean;
}

export const customCheckBoxPropsKeys = new Set([
  'autoContrast',
  'theme',
  'disabled',
  'checked',
  'onChange',
  'value'
]);

export const nativeCheckBoxPropsKeys = new Set([
  'onPress',
  'onPressIn',
  'onPressOut',
  'onValueChange'
]);

export interface SplitProps {
  customCheckBoxProps: CustomCheckBoxProps;
  nativeCheckBoxProps: NativeCheckBoxProps;
  styledCheckBoxProps: StyledCheckBoxProps;
}

export function splitProps(props: CheckBoxProps): SplitProps {
  const styledCheckBoxProps: { [key: string]: any } = {};
  const customCheckBoxProps: { [key: string]: any } = {};
  const nativeCheckBoxProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customCheckBoxPropsKeys.has(key)) {
      customCheckBoxProps[key] = prop;
    } else if (nativeCheckBoxPropsKeys.has(key)) {
      nativeCheckBoxProps[key] = prop;
    } else {
      styledCheckBoxProps[key] = prop;
    }
  });
  return {
    customCheckBoxProps,
    nativeCheckBoxProps,
    styledCheckBoxProps
  };
}

export const antiForwardCheckBoxPropsKeys = new Set<string>([]);
