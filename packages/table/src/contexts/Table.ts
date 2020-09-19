import { createContext, SetStateAction, Dispatch } from 'react';
import { Col } from '../types';

export type TableContextValue = [
  TableMeta | null,
  Dispatch<SetStateAction<TableMeta | null>>
];

export interface TableMeta {
  colCount?: number;
  cols: Col[];
  pulling?: boolean;
  resizable?: boolean;
  width?: number;
}

export default createContext<TableContextValue>([null, () => {}]);
