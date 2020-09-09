import useRow from './useRow';
import useTable from './useTable';

export default function useResizable() {
  const [row] = useRow();
  const [table] = useTable();
  return !!(table?.resizable || row?.resizable);
}
