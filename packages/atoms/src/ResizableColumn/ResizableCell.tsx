import React, { useRef, useState, useEffect, FC } from 'react';
import { Animated, View, PanResponder } from 'react-native';

let originalColWidth: number;
let colWidth: number;
const ResizableCell: FC = (props) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [width, setWidth] = useState<number>(150);
  const parentRef = useRef(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        originalColWidth = evt.nativeEvent.pageX;
        const par: any = parentRef.current || null;
        if (par !== null) {
          par.measure(
            (
              width: number,
              height: number,
              fx: number,
              fy: number,
              px: number,
              py: number
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
        height: 80,
        backgroundColor: 'red',
        // borderWidth: 2,
        margin: 20,
        marginLeft: 50,
        top: 20
      }}
      ref={parentRef}
      // onLayout={(event: any) => doMeasure(event.nativeEvent.layout)}
    >
      {/* <Text style={{ padding: 20 }}>welcome test</Text> */}
      <View
        {...panResponder.panHandlers}
        // ref={childRef}
        style={{
          height: 80,
          top: 0,
          right: 0,
          width: 10,
          position: 'absolute',
          backgroundColor: 'green'
        }}
      ></View>
    </View>
  );
};

export default ResizableCell;
