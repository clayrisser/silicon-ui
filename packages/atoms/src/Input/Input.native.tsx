import React, { FC, useState } from 'react';
import {
  Input as NativeBaseInput,
  Item as NativeBaseItem,
  NativeBase
} from 'native-base';
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
import useItem from '../hooks/useItem';
import { createStyled } from '../styled';
import {
  InputProps,
  StyledInputProps,
  antiForwardInputPropsKeys,
  splitProps
} from './inputProps';

const StyledNativeBaseInput = createStyled<StyledInputProps, NativeBase.Input>(
  NativeBaseInput,
  {
    forwardPropsBlacklist: antiForwardInputPropsKeys
  }
)(
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

const Input: FC<InputProps> = (props: InputProps) => {
  const item = useItem();
  const [input, setInput] = useState<string>('');
  const {
    customInputProps,
    nativeInputProps,
    nativeItemProps,
    styledInputProps
  } = splitProps(props);
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
  autoContrast: false,
  backgroundColor: '#FFFFFF00',
  fontSize: 0
};

export default Input;
