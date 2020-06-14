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
import { ImageProps, DetailedHTMLImageProps, splitProps } from './imageProps';

const HTMLImage: StyledComponent<
  DetailedHTMLImageProps,
  ImageProps,
  object
> = styled.img(
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

const Image: FC<ImageProps> = (props: ImageProps) => {
  const {
    customImageProps,
    nativeImageProps,
    styledImageProps,
    touchableOpacityProps
  } = splitProps(props);

  function handleClick(e: any) {
    if (props.onPress) props.onPress(e);
  }

  function handleMouseDown(e: any) {
    if (props.onPressIn) props.onPressIn(e);
  }

  function handleMouseUp(e: any) {
    if (props.onPressOut) props.onPressOut(e);
  }

  return (
    <HTMLImage
      {...(customImageProps as any)}
      {...styledImageProps}
      {...touchableOpacityProps}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      src={nativeImageProps.source}
    />
  );
};

Image.defaultProps = {};

export default Image;
