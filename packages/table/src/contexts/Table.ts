import { createContext, SetStateAction, Dispatch } from 'react';
import { Col } from '../types';

export type TableContextValue = [
  TableMeta | null,
  Dispatch<SetStateAction<TableMeta | null>>
];

export interface TableMeta {
  cols: Col[];
  pulling?: boolean;
  resizable?: boolean;
}

export default createContext<TableContextValue>([null, () => {}]);
