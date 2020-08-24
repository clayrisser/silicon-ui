import React, { FC, useState } from 'react';
import reduceCssCalc from 'reduce-css-calc';
import { GestureResponderEvent } from 'react-native';
import Box from '../Box';
import useColor from '../hooks/useColor';
import { TableCellProps, splitProps } from './tableCellProps';

export type Position = [number, number];

const width = 100;

const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const color = useColor(props);
  let [initialX, setInitialX] = useState(-1);
  let [relativeX, setRelativeX] = useState(0);
  let [modifiedX, setModifiedX] = useState(0);
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
    relativeX = modifiedX + x;
    setRelativeX(relativeX);
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
    modifiedX = relativeX;
    setModifiedX(modifiedX);
    setInitialX(-1);
  }

  return (
    <Box
      {...customTableCellProps}
      {...styledTableCellProps}
      backgroundColor="red"
      width={cssCalc(`calc(${props.width?.toString()}px+${relativeX}px)`)}
    >
      <Box
        display="flex"
        flex={1}
        flexDirection="row"
        height={styledTableCellProps.height}
        justifyContent="flex-end"
        position="absolute"
        width={cssCalc(`calc(${props.width?.toString()}px+${relativeX}px)`)}
      >
        <Box
          backgroundColor="green"
          height="100%"
          onDrag={handleDrag}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          width={width / 2}
          style={{
            // @ts-ignore
            cursor: 'ew-resize'
          }}
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
    return parseInt(reducedWidth.toString(), 10);
  }
  return reducedWidth;
}

export default TableCell;
