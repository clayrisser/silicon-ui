import { ReactNode } from 'react';
import { ThemedStyledProps } from 'native-theme-ui';
import {
  GestureResponderEvent,
  PanResponderGestureState,
  TouchableOpacityProps as NativeTouchableOpacityProps,
  ViewProps
} from 'react-native';
import { createSplitProps } from '../../util';

export interface BoxProps
  extends CustomBoxProps,
    StyledNativeViewProps,
    TouchableOpacityProps,
    TouchableProps {}

export interface CustomBoxProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
  releasePressOnExit?: boolean;
}

export interface StyledNativeViewProps
  extends Omit<ThemedStyledProps<ViewProps>, 'ref'> {}

export type TouchableOpacityProps = Omit<
  NativeTouchableOpacityProps,
  'onPress' | 'onPressIn' | 'onPressOut'
>;

export interface TouchableProps {
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
  onPull?: (
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    gestureState?: PanResponderGestureState
  ) => void;
}

interface SplitProps {
  customBoxProps: CustomBoxProps;
  styledNativeViewProps: StyledNativeViewProps;
  touchableOpacityProps: TouchableOpacityProps;
  touchableProps: TouchableProps;
}

export const splitProps = createSplitProps<BoxProps, SplitProps>(
  {
    customBoxProps: ['autoContrast', 'children', 'releasePressOnExit'],
    touchableProps: ['onPress', 'onPressIn', 'onPressOut', 'onPull'],
    touchableOpacityProps: [
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
    ]
  },
  'styledNativeViewProps'
);
