import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
  DetailedHTMLIframeProps,
  splitProps
} from './iframeProps';

const HTMLIframe: StyledComponent<
  DetailedHTMLIframeProps,
  IframeProps,
  object
> = styled.iframe(
  compose(background, border, layout, position, shadow, space, typography)
);

const Iframe: FC<IframeProps> = (props: IframeProps) => {
  const {
    customIframeProps,
    styledIframeProps,
    nativeIframeProps
  } = splitProps(props);

  return (
    <HTMLIframe
      {...styledIframeProps}
      {...nativeIframeProps}
      {...(customIframeProps as any)}
    />
  );
};

Iframe.defaultProps = {};

export default Iframe;
