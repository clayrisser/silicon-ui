import { createContext, SetStateAction, Dispatch } from 'react';
import { Col } from '../types';

export type TableContextValue = [
  TableMeta | null,
  Dispatch<SetStateAction<TableMeta | null>>
];

export interface TableMeta {
  cols: Col[];
}

export default createContext<TableContextValue>([null, () => {}]);
