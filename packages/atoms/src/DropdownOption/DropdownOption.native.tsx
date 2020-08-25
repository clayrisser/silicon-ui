import React, { FC } from 'react';
// import styled, { StyledComponent } from '@emotion/primitives';
import { Picker as NativePicker } from 'react-native';
import {
  background,
  border,
  //  color,
  // compose,
  layout,
  position,
  shadow,
  space
  // typography
} from 'styled-system';
import { createStyled } from '../styled';

import useColor from '../hooks/useColor';
import { DropdownOptionProps, splitProps } from './dropdownOptionProps';

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
        // disabled={customDropdownOptionProps.disabled}
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
  children: <></>
};

export default NativeBasePicker;
