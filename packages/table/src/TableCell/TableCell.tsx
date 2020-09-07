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
import useColWidth from '../hooks/useColWidth';
import useSetCol from '../hooks/useSetCol';
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
  const colWidth = useColWidth();
  const prevColWidth = useColWidth(-1);
  const setCol = useSetCol();
  const setPrevCol = useSetCol(-1);
  const tableCellRef = useRef<NativeMethods | HTMLDivElement>(null);
  let [leftInitialX, setLeftInitialX] = useState(0);
  let [leftModifiedX, setLeftModifiedX] = useState(0);
  let [leftRelativeX, setLeftRelativeX] = useState(0);
  let [rightInitialX, setRightInitialX] = useState(0);
  let [rightModifiedX, setRightModifiedX] = useState(0);
  let [rightRelativeX, setRightRelativeX] = useState(0);
  const { customTableCellProps, styledTableCellProps } = splitProps(props);

  const normalizeWidth = useCallback((width?: number | string) => {
    if (!width) return '0px';
    if (
      width &&
      (width.toString().indexOf('%') > -1 ||
        width.toString().indexOf('px') > -1)
    ) {
      return width.toString();
    }
    return `${width.toString()}px`;
  }, []);

  const width =
    colWidth ||
    cssCalc(normalizeWidth(props.width?.toString()), rightRelativeX);

  async function handleLeftDrag(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const x = pageX - leftInitialX;
    leftRelativeX = leftModifiedX - x;
    setLeftRelativeX(leftRelativeX);
    setPrevCol({
      width: cssCalc(normalizeWidth(prevColWidth), leftRelativeX)
    });
  }

  async function handleLeftPressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.persist();
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    leftInitialX = pageX;
    setLeftInitialX(pageX);
  }

  function handleLeftPressOut(
    _e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    leftModifiedX = leftRelativeX;
    setLeftModifiedX(leftModifiedX);
    leftInitialX = 0;
    setLeftInitialX(leftInitialX);
  }

  async function handleRightDrag(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const x = pageX - rightInitialX;
    rightRelativeX = rightModifiedX - x;
    setRightRelativeX(rightRelativeX);
    setCol({
      width: cssCalc(normalizeWidth(props.width?.toString()), rightRelativeX)
    });
  }

  async function handleRightPressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.persist();
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    rightInitialX = pageX;
    setRightInitialX(pageX);
  }

  function handleRightPressOut(
    _e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    rightModifiedX = rightRelativeX;
    setRightModifiedX(rightModifiedX);
    rightInitialX = 0;
    setRightInitialX(rightInitialX);
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

  return (
    <HTMLTd
      {...customTableCellProps}
      {...styledTableCellProps}
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
          backgroundColor="red"
          height="100%"
          onPressIn={handleLeftPressIn}
          onPressOut={handleLeftPressOut}
          onPull={handleLeftDrag}
          width={grabWidth / 2}
          style={{
            // @ts-ignore
            cursor: 'ew-resize'
          }}
        />
        <Box
          height="100%"
          backgroundColor="pink"
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
      colWidth: {colWidth}
      width: {width}
      prevWidth: {prevColWidth}
      {customTableCellProps.children}
    </HTMLTd>
  );
};

TableCell.defaultProps = {
  autoContrast: false,
  borderStyle: 'solid',
  borderWidth: 0,
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'body'
};

export default TableCell;
