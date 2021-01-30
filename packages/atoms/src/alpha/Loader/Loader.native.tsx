import React, { FC } from 'react';
import { Spinner as NativeBaseLoader } from 'native-base';
import { styled } from 'native-theme-ui';
import {
  background,
  border,
  compose,
  layout,
  position,
  shadow,
  space
} from 'styled-system';
import {
  LoaderProps,
  StyledLoaderProps,
  antiForwardLoaderPropsKeys,
  splitProps
} from './loaderProps';

const StyledNativeBaseLoader = styled<StyledLoaderProps>(NativeBaseLoader, {
  forwardPropsBlacklist: antiForwardLoaderPropsKeys
})(compose(background, border, layout, position, shadow, space));

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const {
    styledLoaderProps,
    customLoaderProps,
    nativeLoaderProps
  } = splitProps(props);

  return (
    <StyledNativeBaseLoader
      {...styledLoaderProps}
      {...nativeLoaderProps}
      {...customLoaderProps}
    />
  );
};

Loader.defaultProps = {};

export default Loader;
