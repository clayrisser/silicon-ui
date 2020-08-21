import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { Picker as NativePicker } from 'react-native';
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
import { createStyled } from '../styled';

import useColor from '../hooks/useColor';
import {
  DropdownOptionProps,
  StyledDropdownOptionProps,
  splitProps
} from './dropdownOptionProps';

const StyledView: StyledComponent<
  StyledDropdownOptionProps,
  StyledDropdownOptionProps,
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

const StyledNativePicker = createStyled<DropdownOptionProps>(NativePicker, [
  background,
  border,
  layout,
  position,
  shadow,
  space
]);

const NativeBasePicker: FC<DropdownOptionProps> = (
  props: DropdownOptionProps
) => {
  const color = useColor(props);
  const {
    customDropdownOptionProps,
    nativeDropdownOptionProps,
    styledDropdownOptionProps
  } = splitProps({
    ...props,
    color
  });
  const children =
    typeof customDropdownOptionProps.children === 'string' ? (
      <NativePicker.Item
        value={customDropdownOptionProps.children}
        label={customDropdownOptionProps.children}
      />
    ) : (
      customDropdownOptionProps.children
    );

  return (
    <StyledNativePicker
      {...styledDropdownOptionProps}
      {...nativeDropdownOptionProps}
    >
      {children}
    </StyledNativePicker>
  );
};

NativeBasePicker.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  // activeOpacity: 1,
  // autoContrast: false,
  // backgroundColor: 'background',
  children: <></>
  // fontSize: 0,
  // lineHeight: 'body'
};

export default NativeBasePicker;
