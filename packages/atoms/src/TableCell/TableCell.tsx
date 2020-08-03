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
import { TdProps, DetailedHTMLTdProps, splitProps } from './tableCellProps';

const HTMLTableCell: StyledComponent<
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
    <HTMLTableCell
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

export default styled(Td)`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
