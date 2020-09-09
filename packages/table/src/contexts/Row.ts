import { createContext, SetStateAction, Dispatch } from 'react';
import { Col } from '../types';

export type RowContextValue = [
  RowMeta | null,
  Dispatch<SetStateAction<RowMeta | null>>
];

export interface RowMeta {
  cols: Col[];
  resizable?: boolean;
}

export default createContext<RowContextValue>([null, () => {}]);
