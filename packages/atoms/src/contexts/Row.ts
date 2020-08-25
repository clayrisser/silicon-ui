import { createContext } from 'react';
import { Col } from '../types';

export interface RowContextValue {
  cols: Col[];
}

export default createContext<RowContextValue | null>(null);
