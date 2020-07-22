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
import { TableProps, DetailedHTMLTableProps, splitProps } from './tableProps';

const HTMLTable: StyledComponent<
  DetailedHTMLTableProps,
  TableProps,
  object
> = styled.table(
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

const Table: FC<TableProps> = (props: TableProps) => {
  const color = useColor(props);
  const { customTableProps, styledTableProps, nativeItemProps } = splitProps({
    ...props,
    color
  });
  return (
    <HTMLTable
      {...styledTableProps}
      {...nativeItemProps}
      {...(customTableProps as any)}
    />
  );
};

Table.defaultProps = {
  autoContrast: false,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  width: '100%'
};

export default Table;
