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
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeCheckBoxProps extends NativeBase.Input {}

export interface NativeItemProps extends Omit<NativeBase.Item, 'style'> {}

export interface CustomCheckBoxProps {
  theme?: Theme;
  type?: string;
  checked?: boolean;
  disabled?: boolean;
  children?: string | ReactNode;
  value?: string;
  label?: string;
  name?: string;
  required?: boolean;
}

export interface CheckBoxProps
  extends CustomCheckBoxProps,
    NativeCheckBoxProps,
    NativeItemProps,
    StyledCheckBoxProps {}

export const customCheckBoxPropsKeys = new Set([
  'theme',
  'type',
  'checked',
  'disabled',
  'value',
  'label'
]);

export const nativeCheckBoxPropsKeys = new Set<string>([
  'color',
  'onPress',
  'checked'
]);

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
