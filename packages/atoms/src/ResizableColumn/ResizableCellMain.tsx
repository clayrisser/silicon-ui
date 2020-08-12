import React, { FC, useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export interface ResizableCellProps {}

let originalColWidth: number;
let colWidth: number;
const ResizableCell: FC<ResizableCellProps> = (props) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [width, setWidth] = useState<number>(300);

  function measureMainComponent(event: any) {
    originalColWidth = event.nativeEvent.pageX;
    const par: any = parentRef.current || null;
    if (par !== null)
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
  function measureChildComponent(event: any) {
    const diff = originalColWidth - event.nativeEvent.pageX;
    setWidth(colWidth - diff);
  }

  // function doMeasure(layout: any) {
  //   const { x, y, width, height } = layout;
  //   console.log(x);
  //   console.log(y);
  //   console.log(width);
  //   console.log(height);
  // }

  return (
    <View
      style={{
        width: width,
        height: 80,
        backgroundColor: 'red',
        borderWidth: 2,
        margin: 20,
        marginLeft: 50
      }}
      ref={parentRef}
      // onLayout={(event: any) => doMeasure(event.nativeEvent.layout)}
    >
      <Text style={{ padding: 20 }}>welcome</Text>
      <TouchableOpacity
        ref={childRef}
        style={{
          height: 75,
          top: 0,
          right: 0,
          width: 10,
          position: 'absolute',
          backgroundColor: 'green'
        }}
        onPressIn={(event) => measureMainComponent(event)}
        onPressOut={(event) => measureChildComponent(event)}
      >
        <View />
      </TouchableOpacity>
    </View>
  );
};

ResizableCell.defaultProps = {};

export default ResizableCell;
