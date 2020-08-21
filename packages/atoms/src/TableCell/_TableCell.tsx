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
import {
  TableCellProps,
  DetailedHTMLTdProps,
  splitProps
} from './tableCellProps';

const HTMLTableCell: StyledComponent<
  DetailedHTMLTdProps,
  TableCellProps,
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

const Td: FC<TableCellProps> = (props: TableCellProps) => {
  const color = useColor(props);
  const { customTableCellProps, styledTableCellProps } = splitProps({
    ...props,
    color
  });
  return (
    <HTMLTableCell
      {...customTableCellProps}
      {...(styledTableCellProps as any)}
    />
  );
};

Td.defaultProps = {
  autoContrast: false,
  borderStyle: 'solid',
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default Td;
