import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { TouchableOpacity, Text } from 'react-native';
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
import { BoxProps, StyledBoxProps } from './boxProps';
import { splitTouchableProps } from '../util';

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

  const children =
    typeof props.children === 'string' ? (
      <Text>{props.children}</Text>
    ) : (
      props.children
    );
  const [clonedProps, touchableProps] = splitTouchableProps<BoxProps>({
    color,
    ...props
  });
  delete clonedProps.activeOpacity;
  delete clonedProps.autoContrast;
  delete clonedProps.theme;
  delete touchableProps.onMouseEnter;
  delete touchableProps.onMouseLeave;
  delete touchableProps.onMouseOver;

  if (Object.keys(touchableProps).length) {
    return (
      <TouchableOpacity {...touchableProps} activeOpacity={props.activeOpacity}>
        <StyledView {...clonedProps}>{children}</StyledView>
      </TouchableOpacity>
    );
  }
  return <StyledView {...clonedProps}>{children}</StyledView>;
};

Box.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  activeOpacity: 1,
  backgroundColor: 'background',
  children: <></>,
  fontSize: 0,
  lineHeight: 'body'
};

export default Box;
