import React, {
  useRef,
  useState,
  useEffect,
  FC,
  ReactNode,
  useContext
} from 'react';
import { Animated, View, PanResponder } from 'react-native';
import ResizableWidthContext from '../contexts/resizableWidth';
import Text from '../Text';

export interface ResizableCellProps {
  children?: any;
  position?: number;
}

let originalColWidth: number;
let colWidth: number;

const ResizableCell: FC<ResizableCellProps> = (props: ResizableCellProps) => {
  const { children, position } = props;

  const pan = useRef(new Animated.ValueXY()).current;
  const [width, setWidth] = useState<number>(150);
  const parentRef = useRef(null);
  const [, setResizableWidth] = useContext(ResizableWidthContext);

  useEffect(() => {
    setResizableWidth({ width: width, cellIndex: position });
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
        top: 20,
        maxWidth: '100%',
        maxHeight: '100%',
        borderWidth: 1
        // backgroundColor: 'red'
      }}
      ref={parentRef}
    >
      <Text style={{ padding: 20 }}>{children}</Text>
      <View
        {...panResponder.panHandlers}
        style={{
          // maxHeight: '100%',
          top: 0,
          height: '100%',
          right: 0,
          width: 10,
          backgroundColor: 'transparent',
          position: 'absolute',
          //@ts-ignore
          cursor: 'ew-resize'
        }}
      ></View>
    </View>
  );
};

ResizableCell.defaultProps = {
  children: 'Test'
};

export default ResizableCell;
