import { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';
import { TouchableOpacityProps, ViewProps } from 'react-native';
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

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface StyledResizableColumnProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeResizableColumnProps extends ViewProps {}

export interface CustomResizableColumnProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  theme?: Theme;
}

export interface ResizableColumnProps
  extends CustomResizableColumnProps,
    NativeResizableColumnProps,
    StyledResizableColumnProps,
    TouchableOpacityProps {}

export const customResizableColumnPropsKeys = new Set([
  'autoContrast',
  'children',
  'theme'
]);

export const touchableOpacityPropsKeys = new Set([
  'activeOpacity',
  'delayLongPress',
  'delayPressIn',
  'delayPressOut',
  'disabled',
  'hitSlop',
  'onBlur',
  'onFocus',
  'onLayout',
  'onLongPress',
  'pressRetentionOffset',
  'testID'
]);

export const nativeResizableColumnPropsKeys = new Set<string>([
  'onPress',
  'onPressIn',
  'onPressOut'
]);

export interface SplitProps {
  customResizableColumnProps: CustomResizableColumnProps;
  nativeResizableColumnProps: NativeResizableColumnProps;
  styledResizableColumnProps: StyledResizableColumnProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: ResizableColumnProps): SplitProps {
  const styledResizableColumnProps: { [key: string]: any } = {};
  const customResizableColumnProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  const nativeResizableColumnProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customResizableColumnPropsKeys.has(key)) {
      customResizableColumnProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeResizableColumnPropsKeys.has(key)) {
      nativeResizableColumnProps[key] = prop;
    } else {
      styledResizableColumnProps[key] = prop;
    }
  });
  return {
    customResizableColumnProps,
    nativeResizableColumnProps,
    styledResizableColumnProps,
    touchableOpacityProps
  };
}
