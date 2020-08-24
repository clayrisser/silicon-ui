import React, { FC, useState, useEffect } from 'react';
import {
  Item as NativeBaseItem,
  CheckBox as NativeBaseCheckbox
} from 'native-base';
import {
  background,
  border,
  color,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useColor from '../hooks/useColor';
import useItem from '../hooks/useItem';
import { createStyled } from '../styled';
import {
  CheckBoxProps,
  antiForwardCheckBoxPropsKeys,
  splitProps
} from './checkboxProps';

const StyledNativeBaseCheckbox = createStyled<CheckBoxProps>(
  NativeBaseCheckbox,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardCheckBoxPropsKeys
);

const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const item = useItem();
  const color = useColor(props);
  const [checked, setChecked] = useState<boolean>(false);

  const {
    customCheckBoxProps,
    nativeCheckBoxProps,
    nativeItemProps,
    styledCheckBoxProps
  } = splitProps({
    ...props,
    color
  });

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
  return (
    <NativeBaseItem {...nativeItemProps}>
      {styledNativeBaseCheckbox}
    </NativeBaseItem>
  );
};

CheckBox.defaultProps = {
  marginTop: 100,
  checked: false
};

export default CheckBox;
