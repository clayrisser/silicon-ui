import React, { FC, useState } from 'react';
import reduceCssCalc from 'reduce-css-calc';
import { GestureResponderEvent } from 'react-native';
import Box from '../Box';
import useColor from '../hooks/useColor';
import { TableCellProps, splitProps } from './tableCellProps';

export type Position = [number, number];

const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const color = useColor(props);
  let [initialX, setInitialX] = useState(-1);
  let [relativeX, setRelativeX] = useState(0);
  const { customTableCellProps, styledTableCellProps } = splitProps({
    ...props,
    color
  });

  async function handleDrag(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.persist();
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const x = pageX - initialX;
    relativeX = x;
    setRelativeX(x);
  }

  function handlePressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.persist();
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    initialX = pageX;
    setInitialX(pageX);
  }

  function handlePressOut() {
    setInitialX(-1);
  }

  return (
    <Box
      {...customTableCellProps}
      {...styledTableCellProps}
      backgroundColor="green"
      width={cssCalc(`calc(${props.width?.toString()}px+${relativeX}px)`)}
    >
      <Box
        display="flex"
        flexDirection="row"
        flex={1}
        justifyContent="flex-end"
        alignItems="flex-end"
      >
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

function cssCalc(width: string): string | number {
  const reducedWidth = reduceCssCalc(width);
  if (reducedWidth.toString().indexOf('%') > -1) return reducedWidth;
  if (reducedWidth.toString().indexOf('px') > -1) {
    return parseInt(reducedWidth.toString());
  }
  return reducedWidth;
}

export default TableCell;
