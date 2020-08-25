import { createContext, SetStateAction, Dispatch } from 'react';
import { Col } from '../types';

export type RowContextValue = [
  Row | null,
  Dispatch<SetStateAction<Row | null>>
];

export interface Row {
  cols: Col[];
}

export default createContext<RowContextValue>([null, () => {}]);
