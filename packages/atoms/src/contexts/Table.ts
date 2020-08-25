import { createContext } from 'react';
import { Col } from '../types';

export interface TableContextValue {
  cols: Col[];
}

export default createContext<TableContextValue | null>(null);
