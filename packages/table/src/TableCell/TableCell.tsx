import React, { FC, useState, useRef, useCallback } from 'react';
import reduceCssCalc from 'reduce-css-calc';
import styled, { StyledComponent } from '@emotion/styled';
import { Box } from '@silicon-ui/atoms';
import { GestureResponderEvent, NativeMethods } from 'react-native';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useRowCol from '../hooks/useRowCol';
import useSetCol from '../hooks/useSetCol';
import useTableCol from '../hooks/useTableCol';
import {
  TableCellProps,
  splitProps,
  DetailedHTMLTdProps
} from './tableCellProps';

export type Position = [number, number];

const grabWidth = 20;

const HTMLTd: StyledComponent<
  DetailedHTMLTdProps,
  TableCellProps,
  object
> = styled.td(
  compose(
    background,
    border,
    color,
    compose,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const [rowCol] = useRowCol();
  const [tableCol] = useTableCol();
  const setCol = useSetCol();
  const tableCellRef = useRef<NativeMethods | HTMLDivElement>(null);
  let [initialX, setInitialX] = useState(0);
  let [modifiedX, setModifiedX] = useState(0);
  let [relativeX, setRelativeX] = useState(0);
  const { customTableCellProps, styledTableCellProps } = splitProps(props);

  const normalizeWidth = useCallback((width?: number | string) => {
    if (!width) return '0px';
    if (width && width.toString().indexOf('%') > -1) return width.toString();
    if (
      width.toString().indexOf('%') > -1 ||
      width.toString().indexOf('px') > -1
    ) {
      return width.toString();
    }
    return `${width.toString()}px`;
  }, []);

  async function handleRightDrag(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const x = pageX - initialX;
    relativeX = modifiedX - x;
    setRelativeX(relativeX);
    setCol({
      width: cssCalc(normalizeWidth(props.width?.toString()), relativeX)
    });
  }

  async function handleRightPressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.persist();
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    initialX = pageX;
    setInitialX(pageX);
  }

  function handleRightPressOut(
    _e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    modifiedX = relativeX;
    setModifiedX(modifiedX);
    initialX = 0;
    setInitialX(initialX);
  }

  function cssCalc(left: string, right: number): string | number {
    const reducedWidth = reduceCssCalc(`calc(${left}-${right}px)`);
    if (reducedWidth.toString().indexOf('%') > -1) {
      return reducedWidth;
    }
    if (reducedWidth.toString().indexOf('px') > -1) {
      return parseInt(reducedWidth.toString(), 10);
    }
    return reducedWidth;
  }

  const width =
    tableCol?.width ||
    rowCol?.width ||
    cssCalc(normalizeWidth(props.width?.toString()), relativeX);

  return (
    <HTMLTd
      {...customTableCellProps}
      {...styledTableCellProps}
      borderWidth={1}
      width={width}
      // @ts-ignore
      ref={tableCellRef}
    >
      <Box
        display="flex"
        flex={1}
        flexDirection="row"
        height={styledTableCellProps.height}
        justifyContent="space-between"
        maxWidth={props.maxWidth}
        minWidth={props.minWidth}
        position="absolute"
        width={width}
      >
        <Box
          height="100%"
          width={grabWidth / 2}
          style={
            {
              // @ts-ignore
              // cursor: 'ew-resize'
            }
          }
        />
        <Box
          height="100%"
          backgroundColor="blue"
          onPull={handleRightDrag}
          onPressIn={handleRightPressIn}
          onPressOut={handleRightPressOut}
          width={grabWidth / 2}
          style={{
            // @ts-ignore
            cursor: 'ew-resize'
          }}
        />
      </Box>
      {customTableCellProps.children}
    </HTMLTd>
  );
};

TableCell.defaultProps = {
  autoContrast: false,
  borderStyle: 'solid',
  borderWidth: 0,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default TableCell;
