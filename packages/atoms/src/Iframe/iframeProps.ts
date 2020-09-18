import { DetailedHTMLProps, IframeHTMLAttributes } from 'react';
import { Theme } from 'theme-ui';
import { WebView as ReactNativeWebView } from 'react-native-webview';
import {
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

export type DetailedHTMLIframeProps = DetailedHTMLProps<
  IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>;

export interface StyledIframeProps
  extends BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeIframeProps
  extends Omit<
    ReactNativeWebView,
    | 'goBack'
    | 'goForward'
    | 'reload'
    | 'stopLoading'
    | 'extraNativeComponentConfig'
    | 'injectJavaScript'
    | 'requestFocus'
    | 'postMessage'
    | 'clearFormData'
    | 'clearCache'
    | 'clearHistory'
    | 'context'
    | 'setState'
    | 'forceUpdate'
    | 'render'
    | 'props'
    | 'state'
    | 'refs'
  > {}

export interface CustomIframeProps {
  theme?: Theme;
  src?: string;
  height?: string;
  width?: string;
  title?: string;
}

export interface IframeProps
  extends CustomIframeProps,
    NativeIframeProps,
    StyledIframeProps {}

export const customIframePropsKeys = new Set([
  'src',
  'height',
  'width',
  'title'
]);

export const nativeIframePropsKeys = new Set(['source']);

export interface SplitProps {
  customIframeProps: CustomIframeProps;
  nativeIframeProps: NativeIframeProps;
  styledIframeProps: StyledIframeProps;
}

export function splitProps(props: IframeProps): SplitProps {
  const styledIframeProps: { [key: string]: any } = {};
  const customIframeProps: { [key: string]: any } = {};
  const nativeIframeProps: { [key: string]: any } = {};

  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customIframePropsKeys.has(key)) {
      customIframeProps[key] = prop;
    } else if (nativeIframePropsKeys.has(key)) {
      nativeIframeProps[key] = prop;
    } else {
      styledIframeProps[key] = prop;
    }
  });
  return {
    customIframeProps,
    nativeIframeProps,
    styledIframeProps
  };
}

export const antiForwardIframePropsKeys = new Set<string>([]);
