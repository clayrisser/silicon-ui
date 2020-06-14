import { ReactNode, DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import {
  ImageBackgroundProps as ReactNativeImageProps,
  TouchableOpacityProps as ReactNativeTouchableOpacityProps
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

export type DetailedHTMLImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface CustomImageProps {
  children?: ReactNode;
  theme?: Theme;
}

export interface NativeImageProps
  extends Omit<
    ReactNativeImageProps,
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'height'
    | 'width'
  > {}

export interface StyledImageProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface TouchableOpacityProps
  extends Omit<ReactNativeTouchableOpacityProps, 'style'> {}

export interface ImageProps
  extends CustomImageProps,
    NativeImageProps,
    StyledImageProps,
    TouchableOpacityProps {}

export const customImagePropsKeys = new Set<string>(['children', 'theme']);

export const nativeImagePropsKeys = new Set<string>([
  'onPress',
  'onPressIn',
  'onPressOut',
  'source'
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
  'onPress',
  'onPressIn',
  'onPressOut',
  'style',
  'pressRetentionOffset',
  'testID'
]);

export const antiForwardButtonPropsKeys = new Set(['borderColor']);

interface SplitProps {
  customImageProps: CustomImageProps;
  nativeImageProps: NativeImageProps;
  styledImageProps: StyledImageProps;
  touchableOpacityProps: TouchableOpacityProps;
}

export function splitProps(props: ImageProps): SplitProps {
  const customImageProps: { [key: string]: any } = {};
  const nativeImageProps: { [key: string]: any } = {};
  const styledImageProps: { [key: string]: any } = {};
  const touchableOpacityProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customImagePropsKeys.has(key)) {
      customImageProps[key] = prop;
    } else if (nativeImagePropsKeys.has(key)) {
      nativeImageProps[key] = prop;
    } else if (touchableOpacityPropsKeys.has(key)) {
      touchableOpacityProps[key] = prop;
    } else {
      styledImageProps[key] = prop;
    }
  });
  return {
    customImageProps,
    nativeImageProps: nativeImageProps as NativeImageProps,
    styledImageProps,
    touchableOpacityProps
  };
}
