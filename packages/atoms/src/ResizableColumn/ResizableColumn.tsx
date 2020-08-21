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
import { ResizableColumnProps, splitProps } from './resizableColumnProps';
import Box from '../Box';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  ResizableColumnProps,
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

const ResizableColumn: FC<ResizableColumnProps> = (
  props: ResizableColumnProps
) => {
  const color = useColor(props);
  const {
    styledResizableColumnProps,
    customResizableColumnProps,
    touchableOpacityProps
  } = splitProps({
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
      {...customResizableColumnProps}
      {...touchableOpacityProps}
      {...(styledResizableColumnProps as any)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Box
        backgroundColor="red"
        height={100}
        width={30}
        right={0}
        position="absolute"
      />
    </HTMLDiv>
  );
};

ResizableColumn.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'background',
  children: <></>,
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default styled(ResizableColumn)`
  :active {
    opacity: ${({ activeOpacity }: ResizableColumnProps) => activeOpacity};
  }
`;
