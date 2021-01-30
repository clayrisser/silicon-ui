import React, { forwardRef, Ref, useRef, useEffect } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import { styled, View as DripsyView } from 'native-theme-ui';
import {
  Animated,
  NativeMethods,
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
import useOnPull from './useOnPull';
import useThemeLookup from '../../hooks/useThemeLookup';
import { BoxProps, StyledBoxProps, splitProps } from './boxProps';

export const StyledView = styled<StyledBoxProps, ViewProps>(DripsyView, {
  isThemed: true
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
    const themeLookup = useThemeLookup();
    const { panHandlers } = useOnPull({
      boxRef,
      onPress: props.onPress,
      onPressIn: props.onPressIn,
      onPressOut: props.onPressOut,
      onPull: props.onPull,
      releasePressOnExit: props.releasePressOnExit
    });
    const mergedRef = useMergedRef<any>(forwardedRef, boxRef);
    const {
      customBoxProps,
      nativeBoxProps,
      nativeTouchableOpacityProps,
      styledBoxProps,
      touchableOpacityProps
    } = splitProps({
      ...props,
      backgroundColor: themeLookup<string>(
        'backgroundColor',
        props.backgroundColor
      )
    });

    useEffect(() => {
      if (props.onPull && !props.backgroundColor) {
        console.warn('backgroundColor prop required for onPull to work');
      }
    }, []);

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
  color: 'text',
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'body'
};

export default Box;
