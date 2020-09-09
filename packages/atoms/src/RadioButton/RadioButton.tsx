import React, { FC, useEffect, useState } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
import { check } from 'prettier';
import {
  RadioButtonProps,
  DetailedHTMLRadioButtonProps,
  splitProps
} from './RadioButtonProps';

const HTMLRadioButton: StyledComponent<
  DetailedHTMLRadioButtonProps,
  RadioButtonProps,
  object
> = styled.input(
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
const RadioButton: FC<RadioButtonProps> = (props: RadioButtonProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    customRadioButtonProps,
    styledRadioButtonProps,
    nativeRadioButtonProps
  } = splitProps({
    ...props
  });

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

  return (
    <HTMLRadioButton
      {...styledRadioButtonProps}
      {...nativeRadioButtonProps}
      {...(customRadioButtonProps as any)}
      checked={nativeRadioButtonProps.selected}
      value={checked}
      selected={nativeRadioButtonProps.selected}
      onChange={handleChange}
    />
  );
};

RadioButton.defaultProps = {
  type: 'radio',
  checked: false
};

export default RadioButton;
