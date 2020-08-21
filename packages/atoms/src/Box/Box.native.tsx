import React, { FC, useRef, useState } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
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
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useColor from '../hooks/useColor';
import { BoxProps, StyledBoxProps, splitProps } from './boxProps';

const StyledView: StyledComponent<
  StyledBoxProps,
  StyledBoxProps,
  any
> = styled.View(
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Box: FC<BoxProps> = (props: BoxProps) => {
  let [pressed, setPressed] = useState(false);
  const color = useColor(props);
  const {
    customBoxProps,
    nativeBoxProps,
    styledBoxProps,
    touchableOpacityProps
  } = splitProps({
    ...props,
    color
  });

  const panResponder = props.onDrag
    ? useRef(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: (
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState
          ) => {
            if (customBoxProps.onDrag) customBoxProps.onDrag(e, gestureState);
          },
          onPanResponderGrant: (
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState
          ) => {
            pressed = true;
            setPressed(true);
            if (props.onPressIn) props.onPressIn(e, gestureState);
          },
          onPanResponderRelease: (
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState
          ) => {
            if (props.onPressOut) props.onPressOut(e, gestureState);
            if (pressed && props.onPress) props.onPress(e, gestureState);
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

  function renderTouchable() {
    if (props.onDrag) {
      return (
        <>
          <Animated.View
            {...panHandlers}
            style={{
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
    <StyledView {...styledBoxProps} {...nativeBoxProps}>
      {Object.keys(touchableOpacityProps).length ? renderTouchable() : children}
    </StyledView>
  );
};

Box.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  autoContrast: false,
  backgroundColor: 'background',
  children: <></>,
  fontSize: 'body',
  lineHeight: 'body'
};

export default Box;
