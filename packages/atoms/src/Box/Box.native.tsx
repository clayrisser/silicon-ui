import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { TouchableOpacity, Text as NativeText } from 'react-native';
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
import useColor from '../hooks/useColor';
import { BoxProps, StyledBoxProps, splitProps } from './boxProps';

const StyledView: StyledComponent<
  StyledBoxProps,
  StyledBoxProps,
  any
> = styled.View(
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

const Box: FC<BoxProps> = (props: BoxProps) => {
  const color = useColor(props);
  const {
    customBoxProps,
    nativeBoxProps,
    styledBoxProps,
    touchableOpacityProps
  } = splitProps({
    color,
    ...props
  });
  const children =
    typeof customBoxProps.children === 'string' ? (
      <NativeText>{customBoxProps.children}</NativeText>
    ) : (
      props.children
    );
  if (Object.keys(touchableOpacityProps).length) {
    return (
      <TouchableOpacity {...touchableOpacityProps}>
        <StyledView {...styledBoxProps} {...nativeBoxProps}>
          {children}
        </StyledView>
      </TouchableOpacity>
    );
  }
  return (
    <StyledView {...styledBoxProps} {...nativeBoxProps}>
      {children}
    </StyledView>
  );
};

Box.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  activeOpacity: 1,
  autoContrast: false,
  backgroundColor: 'background',
  children: <></>,
  fontSize: 0,
  lineHeight: 'body'
};

export default Box;
