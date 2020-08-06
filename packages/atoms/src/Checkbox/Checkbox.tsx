import React, { FC, useState } from 'react';
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
import useColor from '../hooks/useColor';
import {
  CheckBoxProps,
  DetailedHTMLCheckBoxProps,
  splitProps
} from './checkboxProps';

const HTMLCheckBox: StyledComponent<
  DetailedHTMLCheckBoxProps,
  CheckBoxProps,
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

const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const color = useColor(props);
  const [checked, setChecked] = useState<boolean>(false);

  const {
    customCheckBoxProps,
    styledCheckBoxProps,
    nativeItemProps
  } = splitProps({
    ...props,
    color
  });

  function handleClick(_e: any) {
    if (props.onPress) props.onPress();
    setChecked(!checked);
  }

  return (
    <HTMLCheckBox
      {...styledCheckBoxProps}
      {...nativeItemProps}
      {...(customCheckBoxProps as any)}
      onClick={handleClick}
      checked={checked}
    />
  );
};

CheckBox.defaultProps = {
  backgroundColor: 'primary',
  borderRadius: 2,
  borderWidth: 0,
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  width: '100%',
  type: 'checkbox',
  checked: false,
  disabled: false,
  value: 'first',
  label: 'next',
  name: 'other'
};

export default CheckBox;
