declare module 'react-native-table-component' {
  import { FC } from 'react';

  export const Cell: FC<CellProps>;
  export const Row: FC<RowProps>;
  export const Rows: FC<RowsProps>;
  export const Table: FC<TableProps>;
  export const TableWrapper: RC<TableWrapperProps>;
  export interface CellProps {}
  export interface RowProps {}
  export interface RowsProps {}
  export interface TableProps {}
  export interface TableWrapperProps {}
}
