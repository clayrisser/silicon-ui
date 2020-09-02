import React, { FC, useState, useRef, useCallback } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import reduceCssCalc from 'reduce-css-calc';
import { GestureResponderEvent, Platform, NativeMethods } from 'react-native';
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
import Box from '../Box';
import useColor from '../hooks/useColor';
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
  const color = useColor(props);
  const tableCellRef = useRef<NativeMethods | HTMLDivElement>(null);
  let [initialWidth, setInitialWidth] = useState(0);
  let [initialX, setInitialX] = useState(0);
  let [modifiedX, setModifiedX] = useState(0);
  let [relativeX, setRelativeX] = useState(0);
  const { customTableCellProps, styledTableCellProps } = splitProps({
    ...props,
    color
  });

  const getWidth = useCallback(async () => {
    const [width] = await new Promise<Position>((resolve) => {
      if (Platform.OS !== 'web') {
        const nativeNode: NativeMethods = tableCellRef.current as NativeMethods;
        nativeNode.measure(
          (_width: number, _height: number, fx: number, fy: number) => {
            resolve([fx, fy]);
          }
        );
      } else {
        const webNode = tableCellRef.current as HTMLDivElement;
        resolve([webNode.offsetWidth, webNode.offsetHeight]);
      }
    });
    return width;
  }, [tableCellRef.current]);

  const normalizeWidth = useCallback((width?: number | string) => {
    if (!width) return '0px';
    if (width && width.toString().indexOf('%') > -1) {
      if (Platform.OS === 'web') {
        return width.toString();
      }
      if (initialWidth) {
        return `${initialWidth.toString()}px`;
      }
    }
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
    if (Platform.OS !== 'web') e.persist();
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const x = pageX - initialX;
    relativeX = modifiedX - x;
    setRelativeX(relativeX);
    setCol({
      widthFactor: cssCalc(normalizeWidth(props.width?.toString()), relativeX)
    });
  }

  async function handleRightPressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.persist();
    if (!initialWidth && Platform.OS !== 'web') {
      initialWidth = await getWidth();
      if (initialWidth) {
        setInitialWidth(initialWidth);
      }
    }
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    initialX = pageX;
    setInitialX(pageX);
  }

  function handleRightPressOut(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (Platform.OS !== 'web') e.persist();
    modifiedX = relativeX;
    setModifiedX(modifiedX);
    initialX = 0;
    setInitialX(initialX);
  }

  function cssCalc(left: string, right: number): string | number {
    if (left.toString().indexOf('%') > -1 && Platform.OS !== 'web') {
      if (right === 0) return left;
      return initialWidth - right;
    }
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
    tableCol?.widthFactor ||
    rowCol?.widthFactor ||
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
