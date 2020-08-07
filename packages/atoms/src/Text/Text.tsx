import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import {
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import {
  DetailedHTMLDivProps,
  StyledTextProps,
  TextProps,
  splitProps
} from './textProps';

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  StyledTextProps,
  object
> = styled.div(compose(color, layout, position, shadow, space, typography));

const Text: FC<TextProps> = (props: TextProps) => {
  const {
    customTextProps,
    styledTextProps,
    styledViewProps,
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
    <HTMLDiv
      {...customTextProps}
      {...touchableOpacityProps}
      {...(styledTextProps as any)}
      {...(styledViewProps as any)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

Text.defaultProps = {
  children: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
  small: 'first'
};

export default Text;
