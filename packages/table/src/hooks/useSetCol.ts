import useRowCol from './useRowCol';
import useTableCol from './useTableCol';
import { Col } from '../types';

export default function useSetCol(offset = 0) {
  const [rowCol, setRowCol] = useRowCol(offset);
  const [tableCol, setTableCol] = useTableCol(offset);

  return (col: Partial<Col>) => {
    setRowCol({
      id: 0,
      width: 0,
      ...rowCol,
      ...col
    });
    setTableCol({
      id: 0,
      width: 0,
      ...tableCol,
      ...col
    });
  };
}
