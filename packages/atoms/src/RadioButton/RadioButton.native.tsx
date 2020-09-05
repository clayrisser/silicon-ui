import React, { FC, useState, useEffect } from 'react';
import {
  Item as NativeBaseItem,
  Radio as NativeBaseRadioButton
} from 'native-base';
import {
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
  RadioButtonProps,
  antiForwardRadioButtonPropsKeys,
  splitProps
} from './RadioButtonProps';

const StyledNativeBaseRadioButton = createStyled<RadioButtonProps>(
  NativeBaseRadioButton,
  [border, color, layout, position, shadow, space, typography],
  antiForwardRadioButtonPropsKeys
);

const RadioButton: FC<RadioButtonProps> = (props: RadioButtonProps) => {
  const item = useItem();
  const color = useColor(props);
  const [checked, setChecked] = useState<boolean>(false);

  const { customRadioButtonProps, styledRadioButtonProps } = splitProps({
    ...props,
    color
  });
  useEffect(() => {
    if (customRadioButtonProps.checked !== undefined)
      setChecked(customRadioButtonProps.checked);
  }, [customRadioButtonProps.checked]);

  const styledNativeBaseRadioButton = (
    <StyledNativeBaseRadioButton
      {...customRadioButtonProps}
      {...styledRadioButtonProps}
      checked={checked}
    />
  );
  if (item.hasItemParent) return styledNativeBaseRadioButton;
  return <NativeBaseItem>{StyledNativeBaseRadioButton}</NativeBaseItem>;
};

RadioButton.defaultProps = {
  marginTop: 100,
  checked: false
};

export default RadioButton;
