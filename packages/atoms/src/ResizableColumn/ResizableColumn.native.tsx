import React, { FC, useRef } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import {
  TouchableOpacity,
  Text as NativeText,
  View,
  Alert
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
import {
  ResizableColumnProps,
  StyledResizableColumnProps,
  splitProps
} from './resizableColumnProps';
import Box from '../Box';
import { number } from '@storybook/addon-knobs';

const StyledView: StyledComponent<
  StyledResizableColumnProps,
  StyledResizableColumnProps,
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

const ResizableColumn: FC<ResizableColumnProps> = (
  props: ResizableColumnProps
) => {
  const color = useColor(props);
  const parentRef = useRef();

  const {
    customResizableColumnProps,
    nativeResizableColumnProps,
    styledResizableColumnProps,
    touchableOpacityProps
  } = splitProps({
    ...props,
    color
  });

  function onLayout(event: any) {
    const { x, y, height, width } = event.nativeEvent.layout;
    //  const newHeight = this.state.view2LayoutProps.height + 1;
    const newLayout = {
      height: height,
      width: width,
      left: x,
      top: y
    };
    console.log(newLayout, 'new layout');
  }

  // function handleClick() {
  //   const measure = parentRef.current || undefined;
  //   if (measure !== undefined) {
  //     measure?.measure((width: number, height: number) => {
  //       console.log(width, height);
  //     });
  //   }
  // }

  const children =
    typeof customResizableColumnProps.children === 'string' ? (
      <NativeText>{customResizableColumnProps.children}</NativeText>
    ) : (
      customResizableColumnProps.children
    );
  if (Object.keys(touchableOpacityProps).length) {
    return (
      <TouchableOpacity {...touchableOpacityProps}>
        <StyledView
          {...styledResizableColumnProps}
          {...nativeResizableColumnProps}
          //@ts-ignore
          ref={parentRef}
          // onLayout={(event: any) => onLayout(event)}
        >
          {children}
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'red',
                height: 100,
                width: 30,
                right: 0,
                position: 'absolute'
              }}
            />
          </TouchableOpacity>
        </StyledView>
      </TouchableOpacity>
    );
  }
  return (
    <StyledView {...styledResizableColumnProps} {...nativeResizableColumnProps}>
      {children}
    </StyledView>
  );
};

ResizableColumn.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  activeOpacity: 1,
  autoContrast: false,
  //   backgroundColor: 'background',
  children: <></>,
  fontSize: 0,
  lineHeight: 'body',
  borderWidth: 1
};

export default ResizableColumn;
