import React, { FC } from 'react';
import Box from '../Box';
import useColor from '../hooks/useColor';
import { TableCellProps, splitProps } from './tableCellProps';

const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const color = useColor(props);
  const { customTableCellProps, styledTableCellProps } = splitProps({
    ...props,
    color
  });

  function handleMouseDrag() {
    console.log('dragging');
  }

  return (
    <Box
      {...customTableCellProps}
      {...styledTableCellProps}
      onMouseDrag={handleMouseDrag}
    />
  );
};

TableCell.defaultProps = {
  autoContrast: false,
  borderStyle: 'solid',
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default TableCell;
