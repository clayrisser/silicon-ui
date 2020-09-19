import reduceCssCalc from 'reduce-css-calc';
import styled, { StyledComponent } from '@emotion/styled';
import { Box } from '@silicon-ui/atoms/lib';
import { GestureResponderEvent, NativeMethods } from 'react-native';
import React, {
  LegacyRef,
  forwardRef,
  useCallback,
  useEffect,
  useState
} from 'react';
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

const Cell = forwardRef(
  (props: CellProps, cellRef: LegacyRef<NativeMethods | HTMLDivElement>) => {
    const colWidth = useColWidth();
    const isLastCol = useIsLastCol();
    const resizable = !isLastCol && (useResizable() || props.resizable);
    const setCol = useSetCol();
    const themeLookup = useThemeLookup();
    const { customCellProps, styledCellProps } = splitProps(props);
    let [staticWidth, setStaticWidth] = useState<number | undefined>();
    let [width, setWidth] = useState<string | number | undefined>(
      props.width as string | number | undefined
    );
    let [pulling, setPulling] = usePulling();
    // eslint-ignore-next-line prefer-const
    let [rightInitialX, setRightInitialX] = useState(0);
    // eslint-ignore-next-line prefer-const
    let [rightRelativeX, setRightRelativeX] = useState(0);
    // eslint-ignore-next-line prefer-const
    let [initialWidth, setInitialWidth] = useState<number | undefined>();

    useEffect(() => {
      if (resizable) {
        width = (colWidth ||
          (staticWidth
            ? cssCalc(normalizeWidth(staticWidth), rightRelativeX)
            : props.width)) as number | string;
      }
      setWidth(width);
    }, [colWidth, props.width, staticWidth, rightRelativeX]);

    useEffect(() => {
      (async () => {
        if (pulling) {
          initialWidth = await getMeasuredWidth();
          setInitialWidth(initialWidth);
          if (
            !isLastCol &&
            typeof initialWidth !== 'undefined' &&
            typeof staticWidth === 'undefined'
          ) {
            staticWidth = initialWidth - 3;
            setStaticWidth(staticWidth);
            setCol({ width: staticWidth });
          }
        } else {
          rightInitialX = 0;
          setRightInitialX(rightInitialX);
          initialWidth = undefined;
          setInitialWidth(initialWidth);
        }
      })();
    }, [pulling]);

    const getMeasuredWidth = useCallback(async () => {
      // @ts-ignore
      return cellRef.current.offsetWidth;
    }, [cellRef]);

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

    function getRelativeX(
      e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
      initialX: number
    ): number {
      return -(getX(e) - initialX);
    }

    function getX(
      e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
    ): number {
      const mouseEvent = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
      const gestureEvent = e as GestureResponderEvent;
      const pageX = mouseEvent.pageX || gestureEvent.nativeEvent?.pageX || 0;
      return pageX;
    }

    function cssCalc(
      left?: string,
      right?: number
    ): string | number | undefined {
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

    async function handleRightDrag(
      e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
      if (!pulling) return;
      rightRelativeX = getRelativeX(e, rightInitialX);
      setRightRelativeX(rightRelativeX);
      setCol({
        width: cssCalc(
          normalizeWidth(initialWidth?.toString()),
          rightRelativeX
        ) as number | undefined
      });
    }

    async function handleRightPressIn(
      e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
      if (!resizable) return;
      rightInitialX = getX(e);
      setRightInitialX(rightInitialX);
      pulling = true;
      setPulling(pulling);
    }

    function handleRightPressOut(
      _e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
      pulling = false;
      setPulling(pulling);
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

    function renderDebug() {
      if (!customCellProps.debug) return <></>;
      return (
        <>
          <div>
            width:
            {width}
          </div>
          <div>
            initial width:
            {initialWidth}
          </div>
          <div>
            initial x:
            {rightInitialX}
          </div>
          <div>
            last col:
            {isLastCol.toString()}
          </div>
          <div>
            pulling:
            {pulling}
          </div>
          <div>
            relative x:
            {rightRelativeX}
          </div>
          <div>
            resizable:
            {resizable?.toString()}
          </div>
          <div>
            static width:
            {staticWidth}
          </div>
        </>
      );
    }

    return (
      <HTMLTd
        borderWidth={styledCellProps.borderWidth || 0}
        style={{
          ...(props.style || {}),
          ...(resizable
            ? {
                whitespace: 'nowrap',
                ...(pulling ? { userSelect: 'none' } : {})
              }
            : {})
        }}
        {...customCellProps}
        {...styledCellProps}
        width={width}
        // @ts-ignore
        ref={cellRef}
      >
        {renderGrab()}
        {renderDebug()}
        {customCellProps.children}
      </HTMLTd>
    );
  }
);

Cell.defaultProps = {
  borderStyle: 'solid',
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'body',
  grabWidth: 20
};

export default Cell;
