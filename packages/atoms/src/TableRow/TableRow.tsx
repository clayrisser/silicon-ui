import React, { FC, ReactNode, useState } from 'react';
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
import ColumnContext from '../contexts/Column';
import RowContext, { Row } from '../contexts/Row';
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
  const [row, setRow] = useState<Row | null>(null);

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
    <HTMLTableRow {...((styledTableRowProps as unknown) as any)}>
      <RowContext.Provider value={[row, setRow]}>
        {renderCells()}
      </RowContext.Provider>
    </HTMLTableRow>
  );
};

TableRow.defaultProps = {};

export default TableRow;
