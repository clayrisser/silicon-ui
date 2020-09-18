import { useState } from 'react';
import useRow from './useRow';
import useTable from './useTable';
import { RowMeta } from '../contexts/Row';
import { TableMeta } from '../contexts/Table';

export default function usePulling(): [boolean, (pulling: boolean) => any] {
  const [pulling, setPulling] = useState(false);
  const [row, setRow] = useRow();
  const [table, setTable] = useTable();
  return [
    !!(pulling || row?.pulling || table?.pulling),
    (pulling: boolean) => {
      setPulling(pulling);
      setRow((row: RowMeta | null) => {
        return {
          ...row,
          pulling
        } as RowMeta;
      });
      setTable((row: TableMeta | null) => {
        return {
          ...row,
          pulling
        } as TableMeta;
      });
    }
  ];
}
