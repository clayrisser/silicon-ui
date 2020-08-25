import React, { FC, useState, useEffect } from 'react';
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
  //  typography
} from 'styled-system';
import { createStyled } from '../styled';

import useColor from '../hooks/useColor';
import {
  DropdownSelectProps,
  // StyledDropdownSelectProps,
  splitProps
} from './dropdownSelectProps';

// const StyledView: StyledComponent<
//   StyledDropdownSelectProps,
//   StyledDropdownSelectProps,
//   any
// > = styled.View(
//   compose(
//     background,
//     border,
//     color,
//     layout,
//     position,
//     shadow,
//     space,
//     typography
//   )
// );

const StyledNativePicker = createStyled<DropdownSelectProps>(NativePicker, [
  background,
  border,
  layout,
  position,
  shadow,
  space
]);

const NativeBasePicker: FC<DropdownSelectProps> = (
  props: DropdownSelectProps
) => {
  const color = useColor(props);
  const [selectedValue, setSelectedValue] = useState('Saab');
  const {
    customDropdownSelectProps,
    nativeDropdownSelectProps,
    styledDropdownSelectProps,
    touchableOpacityProps
  } = splitProps({
    ...props,
    color
  });

  useEffect(() => {
    if (nativeDropdownSelectProps.selectedValue !== undefined)
      setSelectedValue(nativeDropdownSelectProps.selectedValue);
  }, [nativeDropdownSelectProps.selectedValue]);

  function handleChange(value: any) {
    if (props.onPress) {
      props.onPress(value);
      setSelectedValue(value);
    }
  }
  const children =
    typeof customDropdownSelectProps.children === 'string' ? (
      <NativePicker
        {...touchableOpacityProps}
        onValueChange={handleChange}
        selectedValue={selectedValue}
      >
        {customDropdownSelectProps.children}
      </NativePicker>
    ) : (
      customDropdownSelectProps.children
    );

  return (
    <StyledNativePicker
      {...styledDropdownSelectProps}
      {...nativeDropdownSelectProps}
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
