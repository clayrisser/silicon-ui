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
import useColumn from '../hooks/useColumn';
import useRow from '../hooks/useRow';
import { Col } from '../types';
import { Row } from '../contexts/Row';
import {
  TableCellProps,
  splitProps,
  DetailedHTMLTdProps
} from './tableCellProps';

export type Position = [number, number];

const width = 20;

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
  const color = useColor(props);
  const column = useColumn();
  const [row, setRow] = useRow();
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
      } else if (initialWidth) {
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
    setRow((row: Row | null) => {
      const newRow: Row = { ...row, cols: [...(row?.cols || [])] };
      if (typeof column?.id !== 'undefined') {
        if (!(newRow.cols.length > column.id)) {
          newRow.cols = Array.from(new Array<Col>(column.id + 1)).map(
            (_value: any, i: number) => {
              if (newRow.cols[i]) return newRow.cols[i];
              return { widthFactor: 0 };
            }
          );
        }
        newRow.cols[column.id].widthFactor = cssCalc(
          normalizeWidth(props.width?.toString()),
          relativeX
        );
      }
      return newRow;
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
    if (width.toString().indexOf('%') > -1 && Platform.OS !== 'web') {
      if (right === 0) return width;
      return initialWidth - right;
    }
    const reducedWidth = reduceCssCalc(`calc(${left}-${right}px)`);
    if (reducedWidth.toString().indexOf('%') > -1) {
      return reducedWidth;
    }
    if (reducedWidth.toString().indexOf('px') > -1) {
      return parseInt(reducedWidth.toString());
    }
    return reducedWidth;
  }

  return (
    <HTMLTd
      {...customTableCellProps}
      {...styledTableCellProps}
      width={cssCalc(normalizeWidth(props.width?.toString()), relativeX)}
      // @ts-ignore
      ref={tableCellRef}
    >
      {column?.id} {row?.cols?.[column?.id || 0]?.widthFactor}{' '}
      {customTableCellProps.children}
      <Box
        display="flex"
        flex={1}
        flexDirection="row"
        height={styledTableCellProps.height}
        justifyContent="space-between"
        maxWidth={props.maxWidth}
        minWidth={props.minWidth}
        position="absolute"
        width={cssCalc(normalizeWidth(props.width?.toString()), relativeX)}
      >
        <Box
          height="100%"
          width={width / 2}
          style={{
            // @ts-ignore
            cursor: 'ew-resize'
          }}
        />
        <Box
          height="100%"
          onPull={handleRightDrag}
          onPressIn={handleRightPressIn}
          onPressOut={handleRightPressOut}
          width={width / 2}
          style={{
            // @ts-ignore
            cursor: 'ew-resize'
          }}
        />
      </Box>
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
