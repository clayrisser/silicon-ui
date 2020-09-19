import { createContext, SetStateAction, Dispatch } from 'react';
import { Col } from '../types';

export type RowContextValue = [
  RowMeta | null,
  Dispatch<SetStateAction<RowMeta | null>>
];

export interface RowMeta {
  colCount?: number;
  cols: Col[];
  pulling?: boolean;
  resizable?: boolean;
}

export default createContext<RowContextValue>([null, () => {}]);
