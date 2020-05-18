import React, { FC, useState, useEffect } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { TouchableOpacity } from 'react-native';
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
  const theme: Theme = useTheme();
  const [color, setColor] = useState(props.color as string);

  useEffect(() => {
    setColor(
      autoContrast(
        props.backgroundColor
          ? theme.colors[props.backgroundColor as string] ||
              (props.backgroundColor as string)
          : theme.colors.primary,
        theme.colors.inverseText || theme.colors.text,
        typeof props.autoContrast === 'undefined'
          ? theme.autoContrast
          : props.autoContrast
      )
    );
  }, []);

  const [clonedProps, touchableProps] = splitTouchableProps<BoxProps>({
    color,
    ...props
  });
  delete clonedProps.autoContrast;
  delete clonedProps.theme;
  delete touchableProps.onMouseEnter;
  delete touchableProps.onMouseLeave;
  delete touchableProps.onMouseOver;

  if (Object.keys(touchableProps).length) {
    return (
      <TouchableOpacity {...touchableProps}>
        <StyledView {...clonedProps}>{props.children}</StyledView>
      </TouchableOpacity>
    );
  }
  return <StyledView {...clonedProps}>{props.children}</StyledView>;
};

Box.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  backgroundColor: 'background',
  children: '',
  fontSize: 0,
  lineHeight: 'body'
};

export default Box;
