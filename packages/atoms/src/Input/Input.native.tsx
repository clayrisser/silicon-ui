import React, { FC, useState } from 'react';
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
  const [input, setInput] = useState<string>('');

  const {
    customInputProps,
    nativeInputProps,
    nativeItemProps,
    styledInputProps
  } = splitProps({
    ...props,
    color
  });
  function handleInput(e: any) {
    if (props.onFocus) {
      props.onFocus(e);
      setInput(e);
    }
  }
  const styledNativeBaseInput = (
    <StyledNativeBaseInput
      {...customInputProps}
      {...nativeInputProps}
      {...styledInputProps}
      value={input}
      onChangeText={handleInput}
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
