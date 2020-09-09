import React, { FC, useState, useEffect } from 'react';
import { styled } from 'native-theme-ui';
import {
  NativeBase,
  Item as NativeBaseItem,
  Radio as NativeBaseRadioButton
} from 'native-base';
import {
  border,
  color,
  layout,
  compose,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import { TouchableOpacity } from 'react-native';
import useItem from '../hooks/useItem';
import {
  StyledRadioButtonProps,
  RadioButtonProps,
  antiForwardRadioButtonPropsKeys,
  splitProps,
  NativeRadioButtonProps,
  nativeRadioButtonPropsKeys
} from './RadioButtonProps';

const StyledNativeBaseRadioButton = styled<
  StyledRadioButtonProps,
  NativeBase.Radio
>(NativeBaseRadioButton, {
  forwardPropsBlacklist: antiForwardRadioButtonPropsKeys
})(compose(border, color, layout, position, shadow, space, typography));

const RadioButton: FC<RadioButtonProps> = (props: RadioButtonProps) => {
  const item = useItem();
  const [checked, setChecked] = useState<boolean>(false);

  const {
    customRadioButtonProps,
    styledRadioButtonProps,
    nativeRadioButtonProps
  } = splitProps(props);
  useEffect(() => {
    if (customRadioButtonProps.checked !== undefined)
      setChecked(customRadioButtonProps.checked);
  }, [customRadioButtonProps.checked]);

  function handleChange(e: any) {
    if (props.onPress) {
      props.onPress(e);
      setChecked(!checked);
    }
  }

  const styledNativeBaseRadioButton = (
    <StyledNativeBaseRadioButton
      {...nativeRadioButtonProps}
      {...customRadioButtonProps}
      {...styledRadioButtonProps}
      selected={checked}
      // onPress={handleChange}
    />
  );
  if (item.hasItemParent) return styledNativeBaseRadioButton;
  return <TouchableOpacity>{styledNativeBaseRadioButton}</TouchableOpacity>;
};

RadioButton.defaultProps = {
  marginTop: 100,
  checked: false
};

export default RadioButton;
