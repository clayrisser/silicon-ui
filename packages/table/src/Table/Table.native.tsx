import React, { FC } from 'react';
import { styled } from 'native-theme-ui';
import {
  Table as NativeTable,
  TableProps as NativeTableProps
} from 'react-native-table-component';
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
  StyledTableProps,
  TableProps,
  antiForwardTablePropsKeys,
  splitProps
} from './tableProps';

const StyledTable = styled<StyledTableProps, NativeTableProps>(NativeTable, {
  forwardPropsBlacklist: antiForwardTablePropsKeys
})(
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
  const { customTableProps, nativeTableProps, styledTableProps } = splitProps(
    props
  );
  return (
    <StyledTable
      {...styledTableProps}
      {...nativeTableProps}
      {...customTableProps}
    />
  );
};

Table.defaultProps = {};

export default Table;
