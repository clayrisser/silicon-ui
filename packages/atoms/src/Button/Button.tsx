import { NativeBase, Button as NativeBaseButton } from 'native-base';
import React, { FC } from 'react';
import { styled } from 'native-theme-ui';
import { ButtonProps, splitProps } from './buttonProps';

const StyledNativeBaseButton = styled<NativeBase.Button>(NativeBaseButton)();

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { customButtonProps, themedNativeBaseButtonProps } = splitProps(props);
  return (
    <StyledNativeBaseButton
      {...themedNativeBaseButtonProps}
      {...customButtonProps}
    />
  );
};

Button.defaultProps = {};

export default Button;
