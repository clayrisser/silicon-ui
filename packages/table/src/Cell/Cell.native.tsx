import React, { FC, useState, useRef, useCallback } from 'react';
import reduceCssCalc from 'reduce-css-calc';
import { Box } from '@silicon-ui/atoms/lib';
import { GestureResponderEvent, NativeMethods } from 'react-native';
import { CellProps, splitProps } from './cellProps';

export type Position = [number, number];

const width = 20;

const Cell: FC<CellProps> = (props: CellProps) => {
  const cellRef = useRef<NativeMethods | HTMLDivElement>(null);
  // eslint-ignore-next-line prefer-const
  let [initialWidth, setInitialWidth] = useState(0);
  // eslint-ignore-next-line prefer-const
  let [initialX, setInitialX] = useState(0);
  // eslint-ignore-next-line prefer-const
  let [modifiedX, setModifiedX] = useState(0);
  // eslint-ignore-next-line prefer-const
  let [relativeX, setRelativeX] = useState(0);
  const { customCellProps, styledCellProps } = splitProps(props);

  const getWidth = useCallback(async () => {
    const [width] = await new Promise<Position>((resolve) => {
      const nativeNode: NativeMethods = cellRef.current as NativeMethods;
      nativeNode.measure(
        (_width: number, _height: number, fx: number, fy: number) => {
          resolve([fx, fy]);
        }
      );
    });
    return width;
  }, [cellRef.current]);

  const normalizeWidth = useCallback((width?: number | string) => {
    if (!width) return '0px';
    if (width && width.toString().indexOf('%') > -1) {
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
    e.persist();
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const x = pageX - initialX;
    relativeX = modifiedX - x;
    setRelativeX(relativeX);
  }

  async function handleRightPressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.persist();
    if (!initialWidth) {
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
    e.persist();
    modifiedX = relativeX;
    setModifiedX(modifiedX);
    initialX = 0;
    setInitialX(initialX);
  }

  function cssCalc(left: string, right: number): string | number {
    if (width.toString().indexOf('%') > -1) {
      if (right === 0) return width;
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

  return (
    <Box
      {...(customCellProps as any)}
      {...styledCellProps}
      width={cssCalc(normalizeWidth(props.width?.toString()), relativeX)}
      ref={cellRef}
    >
      <Box
        display="flex"
        flex={1}
        flexDirection="row"
        height={styledCellProps.height}
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
          backgroundColor="blue"
          onPressOut={handleRightPressOut}
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

Cell.defaultProps = {
  borderStyle: 'solid',
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  width: '100%'
};

export default Cell;
