import React, { FC } from 'react';
import { PickerProps, Picker as NativePicker } from 'react-native';
import {
  background,
  border,
  compose,
  layout,
  position,
  shadow,
  space
} from 'styled-system';
import { createStyled } from '../styled';
import {
  NativeDropdownOptionProps,
  DropdownOptionProps,
  splitProps
} from './dropdownOptionProps';

const StyledNativePicker = createStyled<NativeDropdownOptionProps, PickerProps>(
  NativePicker
)(compose(background, border, layout, position, shadow, space));

const NativeBasePicker: FC<DropdownOptionProps> = (
  props: DropdownOptionProps
) => {
  const {
    customDropdownOptionProps,
    nativeDropdownOptionProps,
    styledDropdownOptionProps
  } = splitProps(props);
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
