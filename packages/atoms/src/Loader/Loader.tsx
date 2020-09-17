import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import {
  LoaderProps,
  DetailedHTMLLoaderProps,
  splitProps
} from './loaderProps';

const HTMLDiv: StyledComponent<
  DetailedHTMLLoaderProps,
  LoaderProps,
  object
> = styled.div(
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { customLoaderProps, styledLoaderProps } = splitProps(props);

  return <HTMLDiv {...styledLoaderProps} {...(customLoaderProps as any)} />;
};

Loader.defaultProps = {};

export default styled(Loader)`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
