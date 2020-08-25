import useRowCol from './useRowCol';
import useTableCol from './useTableCol';
import { Col } from '../types';

export default function useSetCol() {
  const [, setRowCol] = useRowCol();
  const [, setTableCol] = useTableCol();

  return (col: Col) => {
    setRowCol(col);
    setTableCol(col);
  };
}
