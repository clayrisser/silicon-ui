import React, { FC, useState } from 'react';
import reduceCssCal from 'reduce-css-calc';
import { Text } from 'react-native';
import Box from '../Box';
import useColor from '../hooks/useColor';
import { TableCellProps, splitProps } from './tableCellProps';

const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const color = useColor(props);
  const [initialX, setInitialX] = useState(-1);
  const [relativeX, setRelativeX] = useState(0);
  const { customTableCellProps, styledTableCellProps } = splitProps({
    ...props,
    color
  });

  function handleDrag(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const x = initialX - e.pageX;
    setRelativeX(x);
    console.log('x', x);
  }

  function handlePressIn(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const x = e.pageX;
    setInitialX(x);
  }

  function handlePressOut() {
    setInitialX(-1);
  }

  /* console.error(
   *   'width',
   *   reduceCssCal(`calc(${props.width?.toString()}px-${relativeX}px)`)
   * ); */

  return (
    <Box
      {...customTableCellProps}
      {...styledTableCellProps}
      backgroundColor="green"
    >
      <Box display="flex" justifyContent="flex-end">
        <Box
          backgroundColor="red"
          height="100%"
          onPressIn={handlePressIn}
          onDrag={handleDrag}
          onPressOut={handlePressOut}
          width={100}
        />
      </Box>
    </Box>
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
