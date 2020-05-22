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
import { BoxProps, StyledBoxProps, splitProps } from './boxProps';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  StyledBoxProps,
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
    color,
    ...props
  });

  function handleClick(e: any) {
    if (props.onPress) props.onPress(e);
  }

  return (
    <HTMLDiv
      {...(styledBoxProps as any)}
      {...touchableOpacityProps}
      onClick={handleClick}
    >
      {customBoxProps.children}
    </HTMLDiv>
  );
};

Box.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'background',
  children: <></>,
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default styled(Box)`
  :active {
    opacity: ${({ activeOpacity }: BoxProps) => activeOpacity};
  }
`;
