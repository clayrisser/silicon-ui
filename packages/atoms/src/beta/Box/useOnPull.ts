import { useState, useRef, RefObject } from 'react';
import {
  GestureResponderEvent,
  GestureResponderHandlers,
  NativeMethods,
  PanResponder,
  PanResponderGestureState
} from 'react-native';

export default function useOnPull({
  boxRef,
  onPress,
  onPressIn,
  onPressOut,
  onPull,
  releasePressOnExit
}: UseOnPullOptions): { panHandlers: GestureResponderHandlers | undefined } {
  const [initialPosition, setInitialPosition] = useState<Position>([0, 0]);
  const [pressed, setPressed] = useState(false);

  async function exitedBox(
    e: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) {
    const { locationX, locationY } = e.nativeEvent;
    const { dx, dy } = gestureState;
    const [initialX, initialY] = initialPosition;
    const [x, y] = [
      ...(Math.abs(dx) > initialX && dx < 0 ? [-locationX] : [locationX]),
      ...(Math.abs(dy) > initialY && dy < 0 ? [-locationY] : [locationY])
    ];
    const [width, height] = await new Promise<Position>((resolve) => {
      boxRef?.current?.measure(
        (_width: number, _height: number, fx: number, fy: number) => {
          resolve([fx, fy]);
        }
      );
    });
    return x < 0 || y < 0 || x > width || y > height;
  }

  const panResponder = onPull
    ? useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => pressed,
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: async (
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState
          ) => {
            if (!pressed) return;
            e.persist();
            if (releasePressOnExit && (await exitedBox(e, gestureState))) {
              // pressed = false;
              setPressed(false);
              if (onPressOut) onPressOut(e, gestureState);
              if (onPress) onPress(e, gestureState);
            } else if (onPull) {
              onPull(e, gestureState);
            }
          },
          onPanResponderGrant: (
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState
          ) => {
            const { locationX, locationY } = e.nativeEvent;
            // initialPosition = [locationX, locationY];
            setInitialPosition([locationX, locationY]);
            // pressed = true;
            setPressed(true);
            if (onPressIn) onPressIn(e, gestureState);
          },
          onPanResponderRelease: (
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState
          ) => {
            // initialPosition = [0, 0];
            setInitialPosition([0, 0]);
            if (pressed) {
              if (onPressOut) onPressOut(e, gestureState);
              if (onPress) onPress(e, gestureState);
            }
            // pressed = false;
            setPressed(false);
          }
        })
      )
    : { current: { panHandlers: {} } };
  const { panHandlers } = panResponder.current;
  return { panHandlers };
}

export interface UseOnPullOptions {
  boxRef: RefObject<NativeMethods>;
  releasePressOnExit?: boolean;
  onPull?: (
    e: GestureResponderEvent,
    gestureState?: PanResponderGestureState
  ) => void;
  onPressIn?: (
    e: GestureResponderEvent,
    gestureState?: PanResponderGestureState
  ) => void;
  onPress?: (
    e: GestureResponderEvent,
    gestureState?: PanResponderGestureState
  ) => void;
  onPressOut?: (
    e: GestureResponderEvent,
    gestureState?: PanResponderGestureState
  ) => void;
}

export type Position = [number, number];
