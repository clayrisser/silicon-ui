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
import useItem from '../hooks/useItem';
import { createStyled } from '../styled';
import {
  InputProps,
  antiForwardInputPropsKeys,
  splitProps
} from './inputProps';

const StyledNativeBaseInput = createStyled<InputProps>(
  NativeBaseInput,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardInputPropsKeys
);

const Input: FC<InputProps> = (props: InputProps) => {
  const item = useItem();
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
  const styledNativeBaseInput = (
    <StyledNativeBaseInput
      // placeholder="hello"
      {...customInputProps}
      {...nativeInputProps}
      {...styledInputProps}
    />
  );
  if (item.hasItemParent) return styledNativeBaseInput;
  return (
    <NativeBaseItem {...nativeItemProps}>
      {styledNativeBaseInput}
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
