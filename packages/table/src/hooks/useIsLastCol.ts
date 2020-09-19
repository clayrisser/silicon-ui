import useColId from '../hooks/useColId';
import useRow from '../hooks/useRow';
import useTable from '../hooks/useTable';

export default function useIsLastCol(): boolean {
  const [table] = useTable();
  const [row] = useRow();
  const colId = useColId();
  const colCount = row?.colCount || table?.colCount || 0;
  return (colId || 0) + 1 === colCount;
}
