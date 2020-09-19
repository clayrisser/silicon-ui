import useColId from './useColId';
import useRow from './useRow';
import useTable from './useTable';

export default function useIsLastCol(): boolean {
  const [table] = useTable();
  const [row] = useRow();
  const colId = useColId();
  const colCount = row?.colCount || table?.colCount || 0;
  return (colId || 0) + 1 === colCount;
}
