import React, { forwardRef, Ref, useRef, useEffect } from 'react';
import { SxStyleProp } from 'theme-ui';
import useMergedRef from '@react-hook/merged-ref';
import {
  styled,
  View as ThemedView,
  Text as ThemedText
} from 'native-theme-ui';
import {
  Animated,
  NativeMethods,
  TouchableOpacity,
  ViewProps
} from 'react-native';
import useOnPull from './useOnPull';
import useThemeLookup from '../../hooks/useThemeLookup';
import { BoxProps, splitProps } from './boxProps';
import useColor from '../../hooks/useColor';

const StyledNativeView = styled<ViewProps>(ThemedView, { isThemed: true })({});

const defaultSx: SxStyleProp = {
  color: 'text',
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'body',
  position: 'inherit'
};

export type Position = [number, number];

const Box = forwardRef<NativeMethods, BoxProps>(
  (props: BoxProps, forwardedRef: Ref<NativeMethods>) => {
    const themeLookup = useThemeLookup();
    const {
      customBoxProps,
      styledNativeViewProps,
      sx,
      touchableOpacityProps,
      touchableProps
    } = splitProps(props, defaultSx);
    const color = useColor(props, sx);
    const backgroundColor = props.onPull
      ? themeLookup<string>('backgroundColor', sx.backgroundColor || '#FFFFFF')
      : sx.backgroundColor;
    const boxRef = useRef<NativeMethods>(null);
    const { panHandlers } = useOnPull({
      boxRef,
      onPress: touchableProps.onPress,
      onPressIn: touchableProps.onPressIn,
      onPressOut: touchableProps.onPressOut,
      onPull: touchableProps.onPull,
      releasePressOnExit: customBoxProps.releasePressOnExit
    });
    const mergedRef = useMergedRef<any>(forwardedRef, boxRef);

    useEffect(() => {
      if (touchableProps.onPull && !sx.backgroundColor) {
        console.warn('backgroundColor required for onPull to work');
      }
    }, []);

    function renderChildren() {
      const { children } = customBoxProps;
      if (typeof children === 'string') {
        return <ThemedText sx={{ color }}>{children}</ThemedText>;
      }
      return children;
    }

    function isTouchable() {
      return (
        Object.keys(touchableOpacityProps).length ||
        Object.keys(touchableProps).length
      );
    }

    function renderTouchable() {
      if (touchableProps.onPull) {
        return (
          <>
            <Animated.View
              {...panHandlers}
              style={{
                backgroundColor: backgroundColor as any,
                height: sx.height as any,
                position: 'absolute',
                width: sx.width as any
              }}
            />
            {renderChildren()}
          </>
        );
      }
      if (!touchableOpacityProps.activeOpacity) {
        touchableOpacityProps.activeOpacity = 1;
      }
      return (
        <TouchableOpacity
          {...touchableOpacityProps}
          {...touchableProps}
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          {renderChildren()}
        </TouchableOpacity>
      );
    }

    return (
      <StyledNativeView ref={mergedRef} {...styledNativeViewProps} sx={sx}>
        {isTouchable() ? renderTouchable() : renderChildren()}
      </StyledNativeView>
    );
  }
);

Box.defaultProps = {};

export default Box;
