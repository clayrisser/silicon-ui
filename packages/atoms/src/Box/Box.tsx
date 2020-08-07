import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
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
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Box: FC<BoxProps> = (props: BoxProps) => {
  const color = useColor(props);
  const { styledBoxProps, customBoxProps, touchableOpacityProps } = splitProps({
    ...props,
    color
  });

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
      {...customBoxProps}
      {...touchableOpacityProps}
      {...(styledBoxProps as any)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

Box.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'background',
  children: <></>,
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'red'
};

export default styled(Box)`
  :active {
    opacity: ${({ activeOpacity }: BoxProps) => activeOpacity};
  }
`;
