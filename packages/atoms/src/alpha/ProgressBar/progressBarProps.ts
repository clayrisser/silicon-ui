import { DetailedHTMLProps, ProgressHTMLAttributes } from 'react';
import { Theme } from 'theme-ui';
// import { NativeBase } from 'native-base';
import { ProgressBarAndroidProperties as ReactNativeProgressBarAndroidProps } from 'react-native';
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

// export interface NativeProgressBarProps extends NativeBase.ProgressBar {}

export interface NativeProgressBarProps
  extends Omit<
    ReactNativeProgressBarAndroidProps,
    'animating' | 'color' | 'indeterminate' | 'progress' | 'styleAttr'
  > {}

export interface CustomProgressBarProps {
  // autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  value?: string;
  max?: string;
  id?: string;
  animating?: boolean;
  color?: string;
  indeterminate?: boolean;
  progress?: number;
  styleAttr?: string;
}

export interface ProgressBarProps
  extends CustomProgressBarProps,
    NativeProgressBarProps,
    StyledProgressBarProps {}

export const customProgressBarPropsKeys = new Set([
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
}

export function splitProps(props: ProgressBarProps): SplitProps {
  const styledProgressBarProps: { [key: string]: any } = {};
  const customProgressBarProps: { [key: string]: any } = {};
  const nativeProgressBarProps: { [key: string]: any } = {};

  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customProgressBarPropsKeys.has(key)) {
      customProgressBarProps[key] = prop;
    } else if (nativeProgressBarPropsKeys.has(key)) {
      nativeProgressBarProps[key] = prop;
    } else {
      styledProgressBarProps[key] = prop;
    }
  });
  return {
    customProgressBarProps,
    nativeProgressBarProps,
    styledProgressBarProps
  };
}

export const antiForwardProgressBarPropsKeys = new Set<string>([]);
