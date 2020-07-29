import React, { FC } from 'react';
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
import { TdProps, DetailedHTMLTdProps, splitProps } from './dataProps';

const HTMLTableData: StyledComponent<
  DetailedHTMLTdProps,
  TdProps,
  object
> = styled.td(
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

const Td: FC<TdProps> = (props: TdProps) => {
  const color = useColor(props);
  const { customTdProps, styledTdProps, nativeItemProps } = splitProps({
    ...props,
    color
  });
  return (
    <HTMLTableData
      {...styledTdProps}
      {...nativeItemProps}
      {...(customTdProps as any)}
    />
  );
};

Td.defaultProps = {
  backgroundColor: 'transparent',
  autoContrast: false,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default Td;
