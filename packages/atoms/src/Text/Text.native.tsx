import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { TouchableOpacity, Text as NativeText } from 'react-native';
import {
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import { TextProps, StyledTextProps } from './textProps';
import { splitTouchableProps } from '../util';

const StyledView: StyledComponent<
  StyledTextProps,
  StyledTextProps,
  any
> = styled.View(compose(color, layout, position, shadow, space, typography));

const Text: FC<TextProps> = (props: TextProps) => {
  const [clonedProps, touchableProps] = splitTouchableProps<TextProps>(props);
  delete clonedProps.children;
  delete clonedProps.theme;
  delete touchableProps.onMouseEnter;
  delete touchableProps.onMouseLeave;
  delete touchableProps.onMouseOver;

  if (Object.keys(touchableProps).length) {
    return (
      <TouchableOpacity {...touchableProps}>
        <StyledView {...clonedProps}>
          <NativeText>{props.children}</NativeText>
        </StyledView>
      </TouchableOpacity>
    );
  }
  return (
    <StyledView {...clonedProps}>
      <NativeText>{props.children}</NativeText>
    </StyledView>
  );
};

Text.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  children: '',
  fontSize: 99,
  lineHeight: 'body'
};

export default Text;
