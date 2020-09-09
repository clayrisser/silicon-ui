import useRowCol from './useRowCol';
import useTableCol from './useTableCol';

export default function useColWidth(offset = 0) {
  const [rowCol] = useRowCol(offset);
  const [tableCol] = useTableCol(offset);
  return tableCol?.width || rowCol?.width;
}
