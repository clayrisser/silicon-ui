import { useContext } from 'react';
import RowContext, { RowContextValue } from '../contexts/Row';

export default function useRow(): RowContextValue {
  return useContext<RowContextValue>(RowContext);
}
