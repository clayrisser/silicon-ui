import React, { FC } from 'react';
import {
  ImageBackground,
  Text as NativeText,
  TouchableOpacity
} from 'react-native';
import {
  background,
  border,
  color,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import {
  ImageProps,
  antiForwardImagePropsKeys,
  splitProps
} from './imageProps';
import { createStyled } from '../styled';

const StyledImageBackground = createStyled<ImageProps>(
  ImageBackground,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardImagePropsKeys
);

const Image: FC<ImageProps> = (props: ImageProps) => {
  const {
    customImageProps,
    nativeImageProps,
    styledImageProps,
    touchableOpacityProps
  } = splitProps(props);
  const children =
    typeof customImageProps.children === 'string' ? (
      <NativeText>{customImageProps.children}</NativeText>
    ) : (
      customImageProps.children
    );
  const styledImageBackground = (
    <StyledImageBackground
      {...nativeImageProps}
      {...styledImageProps}
      {...customImageProps}
    >
      {children}
    </StyledImageBackground>
  );
  if (Object.keys(touchableOpacityProps).length) {
    return (
      <TouchableOpacity {...touchableOpacityProps}>
        {styledImageBackground}
      </TouchableOpacity>
    );
  }
  return styledImageBackground;
};

Image.defaultProps = {
  height: '100%',
  resizeMode: 'stretch'
};

export default Image;
