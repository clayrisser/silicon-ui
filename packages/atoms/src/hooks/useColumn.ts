import { useContext } from 'react';
import ColumnContext, { ColumnContextValue } from '../contexts/Column';

export default function useColumn(): ColumnContextValue | null {
  return useContext<ColumnContextValue | null>(ColumnContext);
}
