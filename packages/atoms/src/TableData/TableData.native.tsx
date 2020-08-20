import React, { FC } from 'react';
import { Rows as NativeTableRowsRowsRows } from 'react-native-table-component';
import {
  background,
  border,
  color,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
// import useColor from '../hooks/useColor';
// import useItem from '../hooks/useItem';
import { createStyled } from '../styled';
import {
  TableRowProps,
  antiForwardTableRowPropsKeys,
  splitProps
} from './tableDataProps';

const StyledTable = createStyled<TableRowProps>(
  // @ts-ignore
  NativeTableRowsRowsRows,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardTableRowPropsKeys
);

const Table: FC<TableRowProps> = (props: TableRowProps) => {
  const {
    customTableRowProps,
    nativeTableRowProps,
    styledTableRowProps
  } = splitProps({
    ...props
  });

  return (
    <StyledTable
      {...styledTableRowProps}
      {...nativeTableRowProps}
      {...customTableRowProps}
    />
  );
};

Table.defaultProps = {};

export default Table;
