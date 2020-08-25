import { createContext } from 'react';

export interface ColumnContextValue {
  id: number;
}

export default createContext<ColumnContextValue | null>(null);
