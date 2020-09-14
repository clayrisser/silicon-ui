import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from 'react';
import { Theme } from 'theme-ui';
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
// import { NativeBase } from 'native-base';
import { Linking as ReactNativeLink } from 'react-native';

export type DetailedHTMLLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export interface StyledLinkProps
  extends BackgroundProps,
    BackgroundColorProps,
    BorderProps,
    LayoutProps,
    OpacityProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

// export interface NativeLinkProps extends Omit<NativeBase.Link, 'color'> {}
export interface NativeLinkProps extends Omit<ReactNativeLink, 'style'> {}

export interface StyledTextProps extends TypographyProps, TextColorProps {}

export interface CustomLinkProps {
  children?: ReactNode;
  theme?: Theme;
  href?: string;
  target?: string;
}

export interface LinkProps
  extends StyledLinkProps,
    CustomLinkProps,
    StyledTextProps,
    NativeLinkProps {}

export const antiForwardLinkPropsKeys = new Set<string>([]);

export const customLinkPropsKeys = new Set(['href', 'children', 'target']);

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

export const nativeLinkPropsKeys = new Set([
  'androidRippleColor',
  'badge',
  'dark',
  'first',
  'full',
  'hasText',
  'large',
  'last',
  'light',
  'onPress',
  'onPressIn',
  'onPressOut',
  'rounded',
  'small',
  'textStyle',
  'bordered',
  'url'
]);

interface SplitProps {
  customLinkProps: CustomLinkProps;
  nativeLinkProps: NativeLinkProps;
  styledLinkProps: StyledLinkProps;
  styledTextProps: StyledTextProps;
}

export function splitProps(props: LinkProps): SplitProps {
  const customLinkProps: { [key: string]: any } = {};
  const nativeLinkProps: { [key: string]: any } = {};
  const styledLinkProps: { [key: string]: any } = {};
  const styledTextProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customLinkPropsKeys.has(key)) {
      customLinkProps[key] = prop;
    } else if (styledTextPropsKeys.has(key)) {
      styledTextProps[key] = prop;
    } else if (nativeLinkPropsKeys.has(key)) {
      nativeLinkProps[key] = prop;
    } else {
      styledLinkProps[key] = prop;
    }
  });
  return {
    customLinkProps,
    nativeLinkProps,
    styledLinkProps,
    styledTextProps
  };
}
