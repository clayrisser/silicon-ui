import React, { useRef, useState, useEffect, FC, useContext } from 'react';
import { Animated, View, PanResponder, Text } from 'react-native';
import ResizableWidthContext from '../contexts/resizableWidth';
// import Text from '../Text';

export interface ResizableCellProps {
  children?: any;
  position?: number;
  resizable?: boolean;
}

let originalColWidth: number;
let colWidth: number;

const ResizableCell: FC<ResizableCellProps> = (props: ResizableCellProps) => {
  const { children, position, resizable } = props;
  const [resizableWidth, setResizableWidth] = useContext(ResizableWidthContext);
  const [width, setWidth] = useState<number>(100);
  const borderWidth = 20;
  const pan = useRef(new Animated.ValueXY()).current;
  const parentRef = useRef(null);

  useEffect(() => {
    const widthValues: any = resizableWidth.widths;
    if (widthValues !== undefined && position !== undefined) {
      // @ts-ignore
      widthValues[position] = width;
      setResizableWidth({ widths: widthValues });
    }
  }, [width]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: async (evt) => {
        originalColWidth = evt.nativeEvent.pageX;
        const par: any = (await parentRef.current) || null;
        if (par !== null) {
          await par.measure(
            (
              _width: number,
              _height: number,
              fx: number,
              _fy: number,
              _px: number,
              _py: number
            ) => {
              colWidth = fx;
            }
          );
        }
      },
      onPanResponderMove: async (evt) => {
        const diff = await (originalColWidth - evt.nativeEvent.pageX);
        await setWidth(colWidth - diff);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <View
      style={{
        // @ts-ignore
        width: resizableWidth?.widths[position],
        maxWidth: '100%',
        maxHeight: '100%',
        borderWidth: 1
        // borderTopWidth: 1,
        // borderBottomWidth: 1
        // borderLeftWidth: 1
      }}
      ref={parentRef}
    >
      <Text style={{ padding: 20, textAlign: 'center' }}>{children}</Text>
      {resizable && (
        <View
          {...panResponder.panHandlers}
          style={{
            height: '100%',
            // backgroundColor: 'green',
            position: 'absolute',
            right: 0,
            top: 0,
            width: borderWidth / 2,
            // @ts-ignore
            cursor: 'ew-resize'
          }}
          collapsable={false}
        />
      )}
      {/* {resizable && (
        <View
          {...panResponderLeft.panHandlers}
          style={{
            backgroundColor: 'green',
            height: '100%',
            position: 'absolute',
            right: -8,
            top: 0,
            width: borderWidth / 2,
            //@ts-ignore
            cursor: 'ew-resize'
          }}
        ></View>
      )} */}
    </View>
  );
};

ResizableCell.defaultProps = {
  children: 'Test',
  resizable: false,
  position: 0
};

export default ResizableCell;
