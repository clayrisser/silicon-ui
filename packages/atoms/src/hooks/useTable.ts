import { useContext } from 'react';
import TableContext, { TableContextValue } from '../contexts/Table';

export default function useTable(): TableContextValue | null {
  return useContext<TableContextValue | null>(TableContext);
}
