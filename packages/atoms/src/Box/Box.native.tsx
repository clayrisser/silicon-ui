import React, { FC, useRef, useState } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { useTheme } from 'emotion-theming';
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  Text as NativeText,
  TouchableOpacity
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
import useColor from '../hooks/useColor';
import { BoxProps, StyledBoxProps, splitProps } from './boxProps';
import { Theme } from '../themes';

const StyledView: StyledComponent<
  StyledBoxProps,
  StyledBoxProps,
  any
> = styled.View(
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

const Box: FC<BoxProps> = (props: BoxProps) => {
  const boxRef = useRef(null);
  const color = useColor(props);
  const theme: Theme = useTheme();
  let [pressed, setPressed] = useState(false);
  let [initialPosition, setInitialPosition] = useState<Position>([0, 0]);
  const {
    customBoxProps,
    nativeBoxProps,
    nativeTouchableOpacityProps,
    styledBoxProps,
    touchableOpacityProps
  } = splitProps({
    ...props,
    color,
    ...(props.backgroundColor !== 'undefined'
      ? {
          backgroundColor:
            theme.colors[props.backgroundColor as string] ||
            props.backgroundColor
        }
      : {})
  });

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
      // @ts-ignore
      boxRef?.current?.measure(
        (_width: number, _height: number, fx: number, fy: number) => {
          resolve([fx, fy]);
        }
      );
    });
    return x < 0 || y < 0 || x > width || y > height;
  }

  const panResponder = nativeBoxProps.onDrag
    ? useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => {
            return pressed;
          },
          onStartShouldSetPanResponder: () => true,
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
              if (props.onPressOut) props.onPressOut(e, gestureState, boxRef);
              if (props.onPress) props.onPress(e, gestureState, boxRef);
            } else if (nativeBoxProps.onDrag) {
              nativeBoxProps.onDrag(e, gestureState, boxRef);
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
            if (props.onPressIn) props.onPressIn(e, gestureState, boxRef);
          },
          onPanResponderRelease: (
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState
          ) => {
            initialPosition = [0, 0];
            setInitialPosition([0, 0]);
            if (pressed) {
              if (props.onPressOut) props.onPressOut(e, gestureState, boxRef);
              if (props.onPress) props.onPress(e, gestureState, boxRef);
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
    if (nativeBoxProps.onDrag) {
      return (
        <>
          <Animated.View
            {...panHandlers}
            style={{
              backgroundColor: styledBoxProps.backgroundColor,
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
    <StyledView ref={boxRef} {...styledBoxProps} {...nativeBoxProps}>
      {isTouchable() ? renderTouchable() : children}
    </StyledView>
  );
};

Box.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  autoContrast: false,
  backgroundColor: 'transparent',
  children: <></>,
  fontSize: 'body',
  height: '100%',
  lineHeight: 'body',
  width: '100%'
};

export default Box;
