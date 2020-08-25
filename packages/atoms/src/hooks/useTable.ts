import { useContext } from 'react';
import TableContext, { TableContextValue } from '../contexts/Table';

export default function useTable(): TableContextValue {
  return useContext<TableContextValue>(TableContext);
}
