import React, { FC, useState, useEffect } from 'react';
import { styled } from 'native-theme-ui';
import {
  CheckBox as NativeBaseCheckbox,
  Item as NativeBaseItem,
  NativeBase
} from 'native-base';
import {
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useItem from '../hooks/useItem';
import {
  StyledCheckBoxProps,
  CheckBoxProps,
  antiForwardCheckBoxPropsKeys,
  splitProps
} from './checkboxProps';

const StyledNativeBaseCheckbox = styled<
  StyledCheckBoxProps,
  NativeBase.CheckBox
>(NativeBaseCheckbox, { forwardPropsBlacklist: antiForwardCheckBoxPropsKeys })(
  compose(border, color, layout, position, shadow, space, typography)
);

const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const item = useItem();
  const [checked, setChecked] = useState<boolean>(false);

  const { customCheckBoxProps, styledCheckBoxProps } = splitProps(props);

  useEffect(() => {
    if (customCheckBoxProps.checked !== undefined)
      setChecked(customCheckBoxProps.checked);
  }, [customCheckBoxProps.checked]);

  function handleChange(e: any) {
    if (props.onPress) {
      props.onPress(e);
      setChecked(!checked);
    }
  }

  const styledNativeBaseCheckbox = (
    <StyledNativeBaseCheckbox
      {...customCheckBoxProps}
      {...styledCheckBoxProps}
      onPress={handleChange}
      checked={checked}
    />
  );
  if (item.hasItemParent) return styledNativeBaseCheckbox;
  return <NativeBaseItem>{styledNativeBaseCheckbox}</NativeBaseItem>;
};

CheckBox.defaultProps = {
  marginTop: 100,
  checked: false
};

export default CheckBox;
