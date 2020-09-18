import React, { FC } from 'react';
import { styled } from 'native-theme-ui';
import { WebView } from 'react-native-webview';
import {
  background,
  border,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import {
  IframeProps,
  StyledIframeProps,
  antiForwardIframePropsKeys,
  splitProps
} from './iframeProps';

const StyledNativeBaseWebView = styled<StyledIframeProps>(WebView, {
  forwardPropsBlacklist: antiForwardIframePropsKeys
})(compose(background, border, layout, position, shadow, space, typography));

const NativeWebView: FC<IframeProps> = (props: IframeProps) => {
  const {
    customIframeProps,
    nativeIframeProps,
    styledIframeProps
  } = splitProps(props);

  const styledNativeBaseWebView = (
    <StyledNativeBaseWebView
      {...nativeIframeProps}
      {...styledIframeProps}
      source={{
        html: `<iframe width=${customIframeProps.width} height=${customIframeProps.height} src=${customIframeProps.src} title=${customIframeProps.title}></iframe>`
      }}
      // source={{ uri: 'https://www.google.com' }}
    />
  );
  return styledNativeBaseWebView;
};

NativeWebView.defaultProps = {};

export default NativeWebView;
