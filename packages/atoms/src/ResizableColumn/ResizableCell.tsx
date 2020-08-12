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
  const [width, setWidth] = useState<number>(150);
  const borderWidth = 20;
  const pan = useRef(new Animated.ValueXY()).current;
  const parentRef = useRef(null);

  useEffect(() => {
    // console.log('width', position, resizableWidth);
    const widthValues: any = resizableWidth.widths;
    //@ts-ignore
    widthValues[position] = width;
    setResizableWidth({ widths: widthValues });
    // console.log(resizableWidth, 'test consumer');
  }, [width]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        originalColWidth = evt.nativeEvent.pageX;
        const par: any = parentRef.current || null;
        if (par !== null) {
          par.measure(
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
        const diff = originalColWidth - evt.nativeEvent.pageX;
        setWidth(colWidth - diff);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <View
      style={{
        width: width,
        top: 20,
        maxWidth: '100%',
        maxHeight: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1
      }}
      ref={parentRef}
    >
      <Text style={{ padding: 20, textAlign: 'center' }}>{children}</Text>
      {/* <View
        {...panResponder.panHandlers}
        style={{
          backgroundColor: 'invisible',
          height: '100%',
          position: 'absolute',
          right: borderWidth / 2,
          top: 0,
          width: borderWidth / 2,
          //@ts-ignore
          cursor: 'ew-resize'
        }}
      ></View> */}
      {resizable && (
        <View
          {...panResponder.panHandlers}
          style={{
            backgroundColor: 'red',
            borderRightWidth: 1,
            height: '100%',
            position: 'absolute',
            right: 0,
            top: 0,
            width: borderWidth / 2,
            //@ts-ignore
            cursor: 'ew-resize'
          }}
        ></View>
      )}
    </View>
  );
};

ResizableCell.defaultProps = {
  children: 'Test',
  resizable: false
};

export default ResizableCell;
