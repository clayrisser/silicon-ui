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
import TableContext, { TableMeta } from '../contexts/Table';
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
  const [table, setTable] = useState<TableMeta | null>(null);
  const { customTableProps, styledTableProps, nativeItemProps } = splitProps(
    props
  );

  function renderRows() {
    let { children } = customTableProps;
    if (!Array.isArray(children)) children = [children];
    return ((children as unknown) as ReactNode[]).map(
      (tableRow: ReactNode) => tableRow
    );
  }

  return (
    <HTMLTable
      {...styledTableProps}
      {...nativeItemProps}
      {...(customTableProps as any)}
      style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}
    >
      <TableContext.Provider value={[table, setTable]}>
        {renderRows()}
      </TableContext.Provider>
    </HTMLTable>
  );
};

Table.defaultProps = {
  backgroundColor: 'transparent',
  autoContrast: false,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default Table;
