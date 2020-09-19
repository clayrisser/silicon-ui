import React, { FC, useRef, useCallback, useState, useEffect } from 'react';
import reduceCssCalc from 'reduce-css-calc';
import styled, { StyledComponent } from '@emotion/styled';
import { Box } from '@silicon-ui/atoms/lib';
import { GestureResponderEvent, NativeMethods } from 'react-native';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useColWidth from '../hooks/useColWidth';
import useIsLastCol from '../hooks/useIsLastCol';
import usePulling from '../hooks/usePulling';
import useResizable from '../hooks/useResizable';
import useSetCol from '../hooks/useSetCol';
import useThemeLookup from '../hooks/useThemeLookup';
import { CellProps, splitProps, DetailedHTMLTdProps } from './cellProps';

export type Position = [number, number];

const HTMLTd: StyledComponent<
  DetailedHTMLTdProps,
  CellProps,
  object
> = styled.td(
  compose(
    background,
    border,
    color,
    compose,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Cell: FC<CellProps> = (props: CellProps) => {
  const cellRef = useRef<NativeMethods | HTMLDivElement>(null);
  const colWidth = useColWidth();
  const isLastCol = useIsLastCol();
  const resizable = !isLastCol && (useResizable() || props.resizable);
  const setCol = useSetCol();
  const themeLookup = useThemeLookup();
  const { customCellProps, styledCellProps } = splitProps(props);
  let [firstPull, setFirstPull] = useState(true);
  let [initWidth, setInitWidth] = useState<number | undefined>();
  let [pulling, setPulling] = usePulling();
  // eslint-ignore-next-line prefer-const
  let [rightInitialX, setRightInitialX] = useState(0);
  // eslint-ignore-next-line prefer-const
  const [rightRelativeX, setRightRelativeX] = useState(0);
  // eslint-ignore-next-line prefer-const
  let [initialWidth, setInitialWidth] = useState<number | undefined>();

  useEffect(() => {
    (async () => {
      if (pulling && !isLastCol && !initWidth) {
        initWidth = (await getMeasuredWidth()) - 3;
        setInitWidth(initWidth);
      }
    })();
  }, [pulling]);

  const getMeasuredWidth = useCallback(async () => {
    // @ts-ignore
    return cellRef.current.offsetWidth;
  }, [cellRef.current]);

  const normalizeWidth = useCallback((width?: number | string) => {
    if (typeof width === 'undefined') return undefined;
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

  const width = resizable
    ? colWidth ||
      (initWidth
        ? cssCalc(normalizeWidth(initWidth), rightRelativeX)
        : props.width)
    : props.width;

  async function handleRightDrag(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (!pulling) return;
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    const rightRelativeX = -(pageX - rightInitialX);
    setRightRelativeX(rightRelativeX);
    setCol({
      width: cssCalc(normalizeWidth(initialWidth?.toString()), rightRelativeX)
    });
  }

  async function handleRightPressIn(
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (!resizable) return;
    const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
    const gestureEvent = e as GestureResponderEvent;
    const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
    rightInitialX = pageX;
    setRightInitialX(pageX);
    if (!firstPull) {
      initWidth = await getMeasuredWidth();
      setInitWidth(initWidth);
    }
    firstPull = false;
    setFirstPull(firstPull);
    pulling = true;
    setPulling(pulling);
    if (typeof initialWidth === 'undefined') {
      initialWidth = initWidth as number;
      setInitialWidth(initialWidth);
    }
  }

  function handleRightPressOut(
    _e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    initialWidth = undefined;
    setInitialWidth(initialWidth);
    rightInitialX = 0;
    setRightInitialX(rightInitialX);
    pulling = false;
    setPulling(pulling);
  }

  function cssCalc(left?: string, right?: number): string | number | undefined {
    if (typeof left === 'undefined') return undefined;
    const reducedWidth = reduceCssCalc(`calc(${left}-${right}px)`);
    if (reducedWidth.toString().indexOf('%') > -1) {
      return reducedWidth;
    }
    if (reducedWidth.toString().indexOf('px') > -1) {
      return parseInt(reducedWidth.toString(), 10);
    }
    return reducedWidth;
  }

  function renderGrab() {
    if (!resizable) return null;
    return (
      <Box
        height="100%"
        onPressIn={handleRightPressIn}
        onPressOut={handleRightPressOut}
        onPull={handleRightDrag}
        position="relative"
        right={
          -(props.grabWidth! / 2) -
          parseInt(
            themeLookup<string>(
              'borderWidth',
              props.borderRightWidth || props.borderWidth
            ) || '0',
            10
          )
        }
        width={props.grabWidth!}
        style={{
          // @ts-ignore
          cursor: 'col-resize',
          float: 'right'
        }}
      />
    );
  }

  return (
    <HTMLTd
      borderWidth={styledCellProps.borderWidth || 0}
      style={{
        ...(props.style || {}),
        ...(resizable
          ? { whitespace: 'nowrap', ...(pulling ? { userSelect: 'none' } : {}) }
          : {})
      }}
      {...customCellProps}
      {...styledCellProps}
      width={width as number}
      // @ts-ignore
      ref={cellRef}
    >
      {isLastCol.toString()}
      {renderGrab()}
      {customCellProps.children}
    </HTMLTd>
  );
};

Cell.defaultProps = {
  borderStyle: 'solid',
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'body',
  grabWidth: 20
};

export default Cell;
