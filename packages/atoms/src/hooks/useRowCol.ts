import useColId from './useColId';
import useRow from './useRow';
import { Col } from '../types';
import { Row } from '../contexts/Row';

export default function useRowCol(): [Col | null, (col: Col) => any] {
  const [row, setRow] = useRow();
  const columnId = useColId();
  const rowCol =
    typeof columnId !== 'undefined' ? row?.cols[columnId] || null : null;

  function setRowCol(col: Col) {
    setRow((row: Row | null) => {
      const newRow: Row = { ...row, cols: [...(row?.cols || [])] };
      if (typeof columnId !== 'undefined') {
        if (!(newRow.cols.length > columnId)) {
          newRow.cols = Array.from(new Array<Col>(columnId + 1)).map(
            (_value: any, i: number) => {
              if (newRow.cols[i]) return newRow.cols[i];
              return { widthFactor: 0 };
            }
          );
        }
        newRow.cols[columnId] = col;
      }
      return newRow;
    });
  }

  return [rowCol, setRowCol];
}
