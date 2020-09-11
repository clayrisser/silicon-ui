import React, { FC, useState, useEffect } from 'react';
import { styled } from 'native-theme-ui';
import {
  Item as NativeBaseItem,
  NativeBase,
  Picker as NativePicker
} from 'native-base';
import {
  background,
  border,
  compose,
  layout,
  position,
  shadow,
  space
} from 'styled-system';
import useItem from '../hooks/useItem';
import {
  DropdownSelectProps,
  StyledDropdownSelectProps,
  splitProps
} from './dropdownSelectProps';

const StyledNativePicker = styled<StyledDropdownSelectProps, NativeBase.Picker>(
  NativePicker
)(compose(background, border, layout, position, shadow, space));

const NativeBasePicker: FC<DropdownSelectProps> = (
  props: DropdownSelectProps
) => {
  const item = useItem();
  const [selectedValue, setSelectedValue] = useState('');
  const {
    customDropdownSelectProps,
    nativeDropdownSelectProps,
    touchableOpacityProps
  } = splitProps(props);

  useEffect(() => {
    if (nativeDropdownSelectProps.selectedValue !== undefined)
      setSelectedValue(nativeDropdownSelectProps.selectedValue);
  }, [nativeDropdownSelectProps.selectedValue]);

  function handleChange(e: any) {
    // if (props.onPress) {
    //   props.onPress(e);
    //   setSelectedValue(e);
    // }
    setSelectedValue(e);
  }
  const children = (
    <StyledNativePicker
      {...touchableOpacityProps}
      mode="dropdown"
      onValueChange={handleChange}
      selectedValue={selectedValue}
    >
      {customDropdownSelectProps.children}
    </StyledNativePicker>
  );
  if (item.hasItemParent) return children;
  return <NativeBaseItem>{children}</NativeBaseItem>;
};

NativeBasePicker.defaultProps = {
  children: <></>
};

export default NativeBasePicker;
