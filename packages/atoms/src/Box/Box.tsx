import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useColor from '../hooks/useColor';
import { BoxProps, splitProps } from './boxProps';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  BoxProps,
  object
> = styled.div(
  compose(
    background,
    border,
    color,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Box: FC<BoxProps> = (props: BoxProps) => {
  const color = useColor(props);
  const [pressed, setPressed] = useState(false);
  const { styledBoxProps, customBoxProps, touchableOpacityProps } = splitProps({
    ...props,
    color
  });

  function handleClick(e: any) {
    if (props.onPress) props.onPress(e);
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setPressed(true);
    if (props.onPressIn) props.onPressIn(e);
  }

  function handleMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setPressed(false);
    if (props.onPressOut) props.onPressOut(e);
  }

  function handleBlur(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.onPress) props.onPress(e);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.onDrag && pressed) props.onDrag(e);
  }

  return (
    <HTMLDiv
      {...touchableOpacityProps}
      {...(styledBoxProps as any)}
      onBlur={handleBlur}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      theme={customBoxProps.theme}
    >
      {customBoxProps.children}
    </HTMLDiv>
  );
};

Box.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'transparent',
  children: <></>,
  color: 'red',
  fontFamily: 'body',
  fontSize: 'body',
  fontWeight: 'body',
  height: '100%',
  lineHeight: 'body',
  width: '100%'
};

export default styled(Box)`
  :active {
    opacity: ${({ activeOpacity }: BoxProps) => activeOpacity};
  }
`;
