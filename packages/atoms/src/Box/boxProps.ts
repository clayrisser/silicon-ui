import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
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
  FlexboxProps,
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
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeBoxProps extends ViewProps {
  onPull?: (
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    gestureState?: PanResponderGestureState
  ) => void;
}

export interface NativeTouchableOpacityProps {
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
}

export interface CustomBoxProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  releasePressOnExit?: boolean;
  theme?: Theme;
}

export interface BoxProps
  extends CustomBoxProps,
    NativeBoxProps,
    NativeTouchableOpacityProps,
    StyledBoxProps,
    Omit<TouchableOpacityProps, 'onPress' | 'onPressIn' | 'onPressOut'> {}

export const customBoxPropsKeys = new Set([
  'autoContrast',
  'children',
  'releasePressOnExit',
  'theme'
]);

export const nativeTouchableOpacityPropsKeys = new Set([
  'onPress',
  'onPressIn',
  'onPressOut'
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

export const nativeBoxPropsKeys = new Set<string>(['onPull']);

export interface SplitProps {
  customBoxProps: CustomBoxProps;
  nativeBoxProps: NativeBoxProps;
  nativeTouchableOpacityProps: NativeTouchableOpacityProps;
  styledBoxProps: StyledBoxProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: BoxProps): SplitProps {
  const customBoxProps: { [key: string]: any } = {};
  const nativeBoxProps: { [key: string]: any } = {};
  const nativeTouchableOpacityProps: { [key: string]: any } = {};
  const styledBoxProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customBoxPropsKeys.has(key)) {
      customBoxProps[key] = prop;
    } else if (nativeTouchableOpacityPropsKeys.has(key)) {
      nativeTouchableOpacityProps[key] = prop;
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
    nativeTouchableOpacityProps,
    styledBoxProps,
    touchableOpacityProps
  };
}
