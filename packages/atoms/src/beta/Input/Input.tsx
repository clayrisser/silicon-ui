import React, { FC } from 'react';
import { NativeBase, Input as NativeBaseInput } from 'native-base';
import { styled } from 'native-theme-ui';
import { SxStyleProp } from 'theme-ui';
import { InputProps, splitProps } from './inputProps';

const StyledNativeBaseInput = styled<NativeBase.Input>(NativeBaseInput)({});

const defaultSx: SxStyleProp = {
  border: '1px solid black'
};

const Input: FC<InputProps> = (props: InputProps) => {
  const { sx, styledNativeBaseInputProps } = splitProps(props, defaultSx);
  const { placeholder } = props;
  return (
    <StyledNativeBaseInput
      placeholder={placeholder}
      {...styledNativeBaseInputProps}
      sx={sx}
    />
  );
};

Input.defaultProps = {};

export default Input;
