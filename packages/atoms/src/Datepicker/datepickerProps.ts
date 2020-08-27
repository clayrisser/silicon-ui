import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { TouchableOpacityProps, ViewProps } from 'react-native';
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

export type DetailedHTMLDatepickerProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface StyledDatepickerProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeDatepickerProps extends ViewProps {
  onDateChange?: any;
}

export interface NativeItemProps extends Omit<NativeBase.Item, 'style'> {}

export interface CustomDatepickerProps {
  type?: string;
  // disabled?: boolean;
  theme?: Theme;
  value?: string;
  max?: string;
  min?: string;
  required?: boolean;
  minimumDate?:number;
  maximumDate?:number;
}

export interface DatepickerProps
  extends CustomDatepickerProps,
    NativeDatepickerProps,
    NativeItemProps,
    TouchableOpacityProps,
    StyledDatepickerProps {}

export const customDatepickerPropsKeys = new Set([
  'type',
  'disabled',
  'theme',
  'min',
  'max',
  'value'
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
  'onPress',
  'onLayout',
  'onLongPress',
  'pressRetentionOffset'
]);

export const nativeDatepickerPropsKeys = new Set([
  'onPress',
  'onPressIn',
  'onPressOut',
  'onDateChange',
  'defaultDate',
  'minimumDate',
  'maximumDate',
  'modalTransparent',
  'animationType',
  'androidMode',
  'placeHolderText',
  'disabled'
]);

export const nativeItemPropsKeys = new Set([
  'bordered',
  'error',
  'fixedLabel',
  'onPress',
  'onPressIn',
  'onPressOut',
  'picker'
]);

export interface SplitProps {
  customDatepickerProps: CustomDatepickerProps;
  nativeDatepickerProps: NativeDatepickerProps;
  nativeItemProps: NativeItemProps;
  styledDatepickerProps: StyledDatepickerProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: DatepickerProps): SplitProps {
  const styledDatepickerProps: { [key: string]: any } = {};
  const customDatepickerProps: { [key: string]: any } = {};
  const nativeDatepickerProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customDatepickerPropsKeys.has(key)) {
      customDatepickerProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeDatepickerPropsKeys.has(key)) {
      nativeDatepickerProps[key] = prop;
    } else if (nativeItemPropsKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledDatepickerProps[key] = prop;
    }
  });
  return {
    customDatepickerProps,
    nativeDatepickerProps,
    nativeItemProps,
    styledDatepickerProps,
    touchableOpacityProps
  };
}

export const antiForwardInputPropsKeys = new Set<string>([]);
