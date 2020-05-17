import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { useTheme } from 'emotion-theming';
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
import { BoxProps, StyledBoxProps } from './boxProps';
import { Theme } from '../themes';
import { autoContrast } from '../color';

const StyledText: StyledComponent<
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
  const theme: Theme = useTheme();
  const clonedProps = {
    color: autoContrast(
      theme.colors[props.backgroundColor as string] ||
        (props.backgroundColor as string),
      theme.colors.inverseText || theme.colors.text,
      typeof props.autoContrast === 'undefined'
        ? theme.autoContrast
        : props.autoContrast
    ),
    ...props
  };
  return <StyledText {...clonedProps}>{props.children}</StyledText>;
};

Box.defaultProps = {
  backgroundColor: 'background',
  children: '',
  // fontFamily: 'body',
  fontSize: 0,
  // fontWeight: 'body',
  lineHeight: 'body',
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseOver: () => {},
  onPress: () => {}
};

export default Box;
