import React, { useState, forwardRef, Ref, useRef } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import { View } from 'dripsy';
import {
  Animated,
  GestureResponderEvent,
  NativeMethods,
  PanResponder,
  PanResponderGestureState,
  Text as NativeText,
  TouchableOpacity,
  ViewProps
} from 'react-native';
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
import { BoxProps, StyledBoxProps, splitProps } from './boxProps';
import { createStyled } from '../styled';

const StyledView = createStyled<StyledBoxProps, ViewProps>(View, {
  dripsy: true
})(
  compose(
    background,
    border,
    color,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

export type Position = [number, number];

const Box = forwardRef<NativeMethods, BoxProps>(
  (props: BoxProps, forwardedRef: Ref<NativeMethods>) => {
    const boxRef = useRef<NativeMethods>(null);
    const mergedRef = useMergedRef<any>(forwardedRef, boxRef);
    let [pressed, setPressed] = useState(false);
    let [initialPosition, setInitialPosition] = useState<Position>([0, 0]);
    const {
      customBoxProps,
      nativeBoxProps,
      nativeTouchableOpacityProps,
      styledBoxProps,
      touchableOpacityProps
    } = splitProps(props);

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

    const panResponder = nativeBoxProps.onPull
      ? useRef(
          PanResponder.create({
            // onPullShouldSetPanResponder: () => {
            //   return pressed;
            // },
            onStartShouldSetPanResponder: () => {
              return pressed;
            },
            onPanResponderMove: async (
              e: GestureResponderEvent,
              gestureState: PanResponderGestureState
            ) => {
              if (!pressed) return;
              e.persist();
              if (
                customBoxProps.releasePressOnExit &&
                (await exitedBox(e, gestureState))
              ) {
                pressed = false;
                setPressed(false);
                if (props.onPressOut) props.onPressOut(e, gestureState);
                if (props.onPress) props.onPress(e, gestureState);
              } else if (nativeBoxProps.onPull) {
                nativeBoxProps.onPull(e, gestureState);
              }
            },
            onPanResponderGrant: (
              e: GestureResponderEvent,
              gestureState: PanResponderGestureState
            ) => {
              const { locationX, locationY } = e.nativeEvent;
              initialPosition = [locationX, locationY];
              setInitialPosition([locationX, locationY]);
              pressed = true;
              setPressed(true);
              if (props.onPressIn) props.onPressIn(e, gestureState);
            },
            onPanResponderRelease: (
              e: GestureResponderEvent,
              gestureState: PanResponderGestureState
            ) => {
              initialPosition = [0, 0];
              setInitialPosition([0, 0]);
              if (pressed) {
                if (props.onPressOut) props.onPressOut(e, gestureState);
                if (props.onPress) props.onPress(e, gestureState);
              }
              pressed = false;
              setPressed(false);
            }
          })
        )
      : { current: { panHandlers: {} } };
    const { panHandlers } = panResponder.current;

    const children =
      typeof customBoxProps.children === 'string' ? (
        <NativeText>{customBoxProps.children}</NativeText>
      ) : (
        customBoxProps.children
      );

    function isTouchable() {
      return (
        Object.keys(touchableOpacityProps).length ||
        Object.keys(nativeTouchableOpacityProps).length
      );
    }

    function renderTouchable() {
      if (nativeBoxProps.onPull) {
        return (
          <>
            <Animated.View
              {...panHandlers}
              style={{
                backgroundColor: styledBoxProps.backgroundColor as any,
                height: styledBoxProps.height as any,
                position: 'absolute',
                width: styledBoxProps.width as any
              }}
            />
            {children}
          </>
        );
      }
      if (!touchableOpacityProps.activeOpacity) {
        touchableOpacityProps.activeOpacity = 1;
      }
      return (
        <TouchableOpacity
          {...touchableOpacityProps}
          {...nativeTouchableOpacityProps}
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          {children}
        </TouchableOpacity>
      );
    }

    return (
      <StyledView ref={mergedRef} {...styledBoxProps} {...nativeBoxProps}>
        {isTouchable() ? renderTouchable() : children}
      </StyledView>
    );
  }
);

Box.defaultProps = {
  autoContrast: false,
  backgroundColor: 'transparent',
  children: <></>,
  fontSize: 'body',
  height: '100%',
  lineHeight: 'body',
  width: '100%'
};

export default Box;
