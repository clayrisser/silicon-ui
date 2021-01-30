import React, { FC } from 'react';
import { NativeBase, Button as NativeBaseButton } from 'native-base';
import { styled, Text as NativeText } from 'native-theme-ui';
import { SxStyleProp } from 'theme-ui';
import { ButtonProps, splitProps } from './buttonProps';

const StyledNativeBaseButton = styled<NativeBase.Button>(NativeBaseButton)({});

const defaultSx: SxStyleProp = {
  backgroundColor: 'primary',
  color: 'text',
  position: 'inherit',
  textAlign: 'center'
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    customButtonProps,
    nativeTextSx,
    sx,
    themedNativeBaseButtonProps
  } = splitProps(props, defaultSx);

  function renderChildren() {
    const { children } = customButtonProps;
    if (!children) return null;
    if (typeof children === 'string') {
      return (
        <NativeText sx={{ ...nativeTextSx, width: '100%' }}>
          {children}
        </NativeText>
      );
    }
    return children;
  }

  return (
    <StyledNativeBaseButton {...themedNativeBaseButtonProps} sx={sx}>
      {renderChildren()}
    </StyledNativeBaseButton>
  );
};

Button.defaultProps = {};

export default Button;
