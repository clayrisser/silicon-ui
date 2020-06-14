import React, { FC } from 'react';
import { Item as NativeBaseItem, Input as NativeBaseInput } from 'native-base';
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
import { InputProps } from './inputProps';
import { createStyled } from '../styled';
import {
  StyledInputProps,
  antiForwardInputPropsKeys,
  splitProps
} from './inputProps';

const StyledNativeBaseInput = createStyled<StyledInputProps>(
  NativeBaseInput,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardInputPropsKeys
);

const Input: FC<InputProps> = (props: InputProps) => {
  const color = useColor(props);
  const {
    customInputProps,
    nativeInputProps,
    nativeItemProps,
    styledInputProps
  } = splitProps({
    ...props,
    color
  });
  return (
    <NativeBaseItem {...nativeItemProps}>
      <StyledNativeBaseInput
        {...customInputProps}
        {...nativeInputProps}
        {...styledInputProps}
      />
    </NativeBaseItem>
  );
};

Input.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
  autoContrast: false,
  backgroundColor: '#FFFFFF00',
  fontSize: 0
};

export default Input;
