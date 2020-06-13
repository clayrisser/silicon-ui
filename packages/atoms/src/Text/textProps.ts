import { HTMLAttributes, DetailedHTMLProps } from 'react';
import {
  TouchableOpacityProps,
  TextProps as ReactNativeTextProps
} from 'react-native';
import {
  LayoutProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TextColorProps,
  TypographyProps
} from 'styled-system';
import { Theme } from '../themes';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface StyledViewProps
  extends LayoutProps,
    PositionProps,
    OpacityProps,
    ShadowProps,
    SpaceProps {}

export interface StyledTextProps extends TypographyProps, TextColorProps {}

export interface NativeTextProps extends ReactNativeTextProps {}

export interface CustomTextProps {
  children?: string;
  theme?: Theme;
}

export interface TextProps
  extends CustomTextProps,
    NativeTextProps,
    Omit<TouchableOpacityProps, 'style'>,
    StyledTextProps,
    StyledViewProps {}

export const customTextPropsKeys = new Set(['children', 'theme']);

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
  'onPress',
  'onPressIn',
  'onPressOut',
  'style',
  'pressRetentionOffset',
  'testID'
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

export const nativeTextPropsKeys = new Set<string>([]);

export interface SplitProps {
  customTextProps: CustomTextProps;
  nativeTextProps: NativeTextProps;
  styledTextProps: StyledTextProps;
  styledViewProps: StyledViewProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: TextProps): SplitProps {
  const customTextProps: { [key: string]: any } = {};
  const nativeTextProps: { [key: string]: any } = {};
  const styledTextProps: { [key: string]: any } = {};
  const styledViewProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customTextPropsKeys.has(key)) {
      customTextProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else if (nativeTextPropsKeys.has(key)) {
      nativeTextProps[key] = prop;
    } else if (styledTextPropsKeys.has(key)) {
      styledTextProps[key] = prop;
    } else {
      styledViewProps[key] = prop;
    }
  });
  return {
    customTextProps,
    nativeTextProps,
    styledTextProps,
    styledViewProps,
    touchableOpacityProps
  };
}
