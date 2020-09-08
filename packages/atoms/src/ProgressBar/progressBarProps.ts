import { DetailedHTMLProps, ProgressHTMLAttributes } from 'react';
import { Theme } from 'theme-ui';
import { NativeBase } from 'native-base';
import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

export type DetailedHTMLProgressProps = DetailedHTMLProps<
  ProgressHTMLAttributes<HTMLProgressElement>,
  HTMLProgressElement
>;

export interface StyledProgressBarProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeProgressBarProps extends NativeBase.ProgressBar {}

export interface NativeItemProps extends Omit<NativeBase.Item, 'style'> {}

export interface CustomProgressBarProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  value?: string;
  max?: string;
  id?: string;
}

export interface ProgressBarProps
  extends CustomProgressBarProps,
    NativeProgressBarProps,
    NativeItemProps,
    StyledProgressBarProps {}

export const customProgressBarPropsKeys = new Set([
  'autoContrast',
  'theme',
  'max',
  'value',
  'id'
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

export const nativeProgressBarPropsKeys = new Set(['progress']);

export interface SplitProps {
  customProgressBarProps: CustomProgressBarProps;
  nativeProgressBarProps: NativeProgressBarProps;
  styledProgressBarProps: StyledProgressBarProps;
  nativeItemProps: NativeItemProps;
}

export function splitProps(props: ProgressBarProps): SplitProps {
  const styledProgressBarProps: { [key: string]: any } = {};
  const customProgressBarProps: { [key: string]: any } = {};
  const nativeProgressBarProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};

  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customProgressBarPropsKeys.has(key)) {
      customProgressBarProps[key] = prop;
    } else if (nativeProgressBarPropsKeys.has(key)) {
      nativeProgressBarProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledProgressBarProps[key] = prop;
    }
  });
  return {
    customProgressBarProps,
    nativeProgressBarProps,
    styledProgressBarProps,
    nativeItemProps
  };
}

export const antiForwardProgressBarPropsKeys = new Set<string>([]);
