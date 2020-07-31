import React, { FC } from 'react';
import { Row as NativeTableRow } from 'react-native-table-component';
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
import useColor from '../hooks/useColor';
import useItem from '../hooks/useItem';
import { createStyled } from '../styled';
import {
  TableRowProps,
  antiForwardTableRowPropsKeys,
  splitProps
} from './tableRowProps';

const StyledTableRow = createStyled<TableRowProps>(
  //@ts-ignore
  NativeTableRow,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardTableRowPropsKeys
);

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
  const {
    customTableRowProps,
    nativeTableRowProps,
    styledTableRowProps
  } = splitProps({
    ...props
  });

  return (
    <StyledTableRow
      {...styledTableRowProps}
      {...nativeTableRowProps}
      {...customTableRowProps}
    />
  );
};

TableRow.defaultProps = {};

export default TableRow;
