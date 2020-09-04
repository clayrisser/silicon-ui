import React, { FC, useState, ReactNode } from 'react';
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
// import useColor from '../hooks/useColor';
// import useItem from '../hooks/useItem';
import ColumnContext from '../contexts/Column';
import RowContext, { Row } from '../contexts/Row';
import { createStyled } from '../styled';
import {
  TableRowProps,
  antiForwardTableRowPropsKeys,
  splitProps
} from './tableRowProps';

const StyledTableRow = createStyled<TableRowProps>(
  // @ts-ignore
  NativeTableRow,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardTableRowPropsKeys
);

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
  const [row, setRow] = useState<Row | null>(null);

  const {
    customTableRowProps,
    nativeTableRowProps,
    styledTableRowProps
  } = splitProps({
    ...props
  });

  function renderCells() {
    let { children } = customTableRowProps;
    if (!Array.isArray(children)) children = [children];
    return ((children as unknown) as ReactNode[]).map(
      (tableCell: ReactNode, key: number) => (
        <ColumnContext.Provider value={{ id: key }}>
          {tableCell}
        </ColumnContext.Provider>
      )
    );
  }

  return (
    <StyledTableRow
      {...styledTableRowProps}
      {...nativeTableRowProps}
      {...customTableRowProps}
    >
      <RowContext.Provider value={[row, setRow]}>
        {renderCells()}
      </RowContext.Provider>
    </StyledTableRow>
  );
};

TableRow.defaultProps = {};

export default TableRow;
