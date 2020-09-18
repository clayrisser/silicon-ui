import React, { ReactNode, useState, forwardRef, LegacyRef } from 'react';
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

const Table = forwardRef((props: TableProps, tableRef: LegacyRef<any>) => {
  const [table, setTable] = useState<TableMeta | null>({
    resizable: props.resizable,
    cols: []
  });
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
      style={{
        borderCollapse: 'collapse',
        tableLayout: 'fixed'
      }}
      ref={tableRef}
    >
      <TableContext.Provider value={[table, setTable]}>
        {renderRows()}
      </TableContext.Provider>
    </HTMLTable>
  );
});

Table.defaultProps = {
  backgroundColor: 'transparent',
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default Table;
