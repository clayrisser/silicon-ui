/* eslint-disable react/destructuring-assignment */
import React, { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
  const theme: Theme = useTheme();
  const clonedProps: BoxProps = {
    color: autoContrast(
      theme.colors.background,
      theme.colors.inverseText || theme.colors.text,
      typeof props.autoContrast === 'undefined'
        ? theme.autoContrast
        : props.autoContrast
    ),
    ...props
  };
  delete clonedProps.autoContrast;
  delete clonedProps.onPress;

  function handleOnClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    props.onPress!();
    const _props: any = props;
    _props.onClick(e);
  }

  return (
    <HTMLDiv
      onClick={handleOnClick}
      {...(clonedProps as DetailedHTMLDivProps)}
    />
  );
};

Box.defaultProps = {
  backgroundColor: 'background',
  children: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseOver: () => {},
  onPress: () => {}
};

export default Box;
