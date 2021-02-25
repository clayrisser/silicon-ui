import React, { FC, useState } from 'react';
import { NativeBase, CheckBox as NativeBaseCheckBox } from 'native-base';
import { styled } from 'native-theme-ui';
import { SxStyleProp } from 'theme-ui';
import { CheckBoxProps, splitProps } from './checkBoxProps';

const StyledNativeBaseCheckBox = styled<NativeBase.CheckBox>(
  NativeBaseCheckBox
)({});

const defaultSx: SxStyleProp = {
  backgroundColor: 'primary'
};

const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { sx, styledNativeBaseCheckBoxProps } = splitProps(props, defaultSx);

  function handleChange(e: any) {
    if (props.onPress) {
      props.onPress(e);
      setChecked(!checked);
    }
  }

  return (
    <StyledNativeBaseCheckBox
      {...styledNativeBaseCheckBoxProps}
      sx={sx}
      onPress={handleChange}
      checked={checked}
    />
  );
};

CheckBox.defaultProps = {};

export default CheckBox;
