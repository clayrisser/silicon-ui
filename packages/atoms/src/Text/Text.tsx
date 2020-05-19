import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
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
import { TextProps, StyledTextProps } from './textProps';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  StyledTextProps,
  object
> = styled.div(compose(color, layout, position, shadow, space, typography));

const Text: FC<TextProps> = (props: TextProps) => {
  const clonedProps: TextProps = { ...props };
  delete clonedProps.onPress;
  delete clonedProps.onPressIn;
  delete clonedProps.onPressOut;
  delete clonedProps.theme;

  function handleClick(_e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.onPress) props.onPress();
  }

  return (
    <HTMLDiv {...(clonedProps as DetailedHTMLDivProps)} onClick={handleClick} />
  );
};

Text.defaultProps = {
  children: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default Text;
