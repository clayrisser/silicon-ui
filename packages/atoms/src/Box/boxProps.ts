import { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';
import {
  GestureResponderEvent,
  PanResponderGestureState,
  TouchableOpacityProps,
  ViewProps
} from 'react-native';
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

export interface StyledBoxProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeBoxProps extends ViewProps {}

export interface CustomBoxProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  onPress?: (
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    gestureState?: PanResponderGestureState
  ) => void;
  onPressOut?: (
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    gestureState?: PanResponderGestureState
  ) => void;
  onPressIn?: (
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    gestureState?: PanResponderGestureState
  ) => void;
  onDrag?: (
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    gestureState?: PanResponderGestureState
  ) => void;
  theme?: Theme;
}

export interface BoxProps
  extends CustomBoxProps,
    NativeBoxProps,
    StyledBoxProps,
    Omit<TouchableOpacityProps, 'onPress' | 'onPressIn' | 'onPressOut'> {}

export const customBoxPropsKeys = new Set([
  'autoContrast',
  'children',
  'onDrag',
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

export const nativeBoxPropsKeys = new Set<string>([
  'onPress',
  'onPressIn',
  'onPressOut'
]);

export interface SplitProps {
  customBoxProps: CustomBoxProps;
  nativeBoxProps: NativeBoxProps;
  styledBoxProps: StyledBoxProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: BoxProps): SplitProps {
  const styledBoxProps: { [key: string]: any } = {};
  const customBoxProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  const nativeBoxProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customBoxPropsKeys.has(key)) {
      customBoxProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeBoxPropsKeys.has(key)) {
      nativeBoxProps[key] = prop;
    } else {
      styledBoxProps[key] = prop;
    }
  });
  return {
    customBoxProps,
    nativeBoxProps,
    styledBoxProps,
    touchableOpacityProps
  };
}
