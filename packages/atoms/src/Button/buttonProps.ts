import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';
import {
  BackgroundColorProps,
  BackgroundProps,
  BorderProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TextColorProps,
  TypographyProps
} from 'styled-system';
import { NativeBase } from 'native-base';
import { Theme } from '../themes';

export type DetailedHTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface StyledButtonProps
  extends BackgroundProps,
    BackgroundColorProps,
    BorderProps,
    LayoutProps,
    OpacityProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface NativeButtonProps extends Omit<NativeBase.Button, 'color'> {}

export interface StyledTextProps extends TypographyProps, TextColorProps {}

export interface CustomButtonProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  theme?: Theme;
}

export interface ButtonProps
  extends StyledButtonProps,
    CustomButtonProps,
    StyledTextProps,
    NativeButtonProps {}

// export const antiForwardButtonPropsKeys = new Set(['borderColor']);

export const customButtonPropsKeys = new Set(['autoContrast', 'children']);

export const styledTextPropsKeys = new Set([
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textAlign'
]);

export const nativeButtonPropsKeys = new Set([
  'androidRippleColor',
  'badge',
  'dark',
  'disabled',
  'first',
  'full',
  'hasText',
  'icon',
  'iconLeft',
  'iconRight',
  'inputButton',
  'large',
  'last',
  'light',
  'onPress',
  'onPressIn',
  'onPressOut',
  'rounded',
  'small',
  'textStyle',
  'transparent',
  'vertical',
  'block',
  'bordered'
]);

interface SplitProps {
  customButtonProps: CustomButtonProps;
  nativeButtonProps: NativeButtonProps;
  styledButtonProps: StyledButtonProps;
  styledTextProps: StyledTextProps;
}

export function splitProps(props: ButtonProps): SplitProps {
  const customButtonProps: { [key: string]: any } = {};
  const nativeButtonProps: { [key: string]: any } = {};
  const styledButtonProps: { [key: string]: any } = {};
  const styledTextProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customButtonPropsKeys.has(key)) {
      customButtonProps[key] = prop;
    } else if (styledTextPropsKeys.has(key)) {
      styledTextProps[key] = prop;
    } else if (nativeButtonPropsKeys.has(key)) {
      nativeButtonProps[key] = prop;
    } else {
      styledButtonProps[key] = prop;
    }
  });
  return {
    customButtonProps,
    nativeButtonProps,
    styledButtonProps,
    styledTextProps
  };
}
