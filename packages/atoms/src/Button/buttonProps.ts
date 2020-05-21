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

export interface StyledButtonProps
  extends BackgroundProps,
    BackgroundColorProps,
    OpacityProps,
    BorderProps,
    LayoutProps,
    Omit<NativeBase.Button, 'color'>,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface StyledTextProps extends TypographyProps, TextColorProps {}

export interface CustomButtonProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: string;
  theme?: Theme;
}

export interface ButtonProps
  extends StyledButtonProps,
    CustomButtonProps,
    StyledTextProps {}

export const antiForwardButtonPropsKeys = new Set(['borderColor']);

export const customButtonPropsKeys = new Set([
  'autoContrast',
  'children',
  'theme'
]);

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

export function splitProps(
  props: ButtonProps
): [StyledButtonProps, CustomButtonProps, StyledTextProps] {
  const styledButtonProps: { [key: string]: any } = {};
  const customButtonProps: { [key: string]: any } = {};
  const styledTextProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customButtonPropsKeys.has(key)) {
      customButtonProps[key] = prop;
    } else if (styledTextPropsKeys.has(key)) {
      styledTextProps[key] = prop;
    } else {
      styledButtonProps[key] = prop;
    }
  });
  return [styledButtonProps, customButtonProps, styledTextProps];
}
