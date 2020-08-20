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
import {
  TableRowProps,
  DetailedHTMLTableRowProps,
  splitProps
} from './tableRowProps';

const HTMLTableRow: StyledComponent<
  DetailedHTMLTableRowProps,
  TableRowProps,
  object
> = styled.tr(
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

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
  const { customTableRowProps, styledTableRowProps } = splitProps({ ...props });
  return (
    <HTMLTableRow {...styledTableRowProps} {...(customTableRowProps as any)} />
  );
};

TableRow.defaultProps = {};

export default TableRow;
