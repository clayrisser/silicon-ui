import React, { FC } from 'react';
import { NativeBase, Button as NativeBaseButton } from 'native-base';
import { styled, Text as NativeText } from 'native-theme-ui';
import { SxStyleProp } from 'theme-ui';
import { ButtonProps, splitProps } from './buttonProps';

const StyledNativeBaseButton = styled<NativeBase.Button>(NativeBaseButton)({});

const defaultSx: SxStyleProp = {
  backgroundColor: 'primary',
  color: 'text',
  textAlign: 'center'
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { customButtonProps, themedNativeBaseButtonProps, sx } = splitProps(
    props,
    defaultSx
  );

  function renderChildren() {
    const { textAlign, color } = sx;
    const { children } = customButtonProps;
    if (!children) return null;
    if (typeof children === 'string') {
      return (
        <NativeText sx={{ color, textAlign, width: '100%' }}>
          {children}
        </NativeText>
      );
    }
    return children;
  }

  return (
    <StyledNativeBaseButton {...themedNativeBaseButtonProps}>
      {renderChildren()}
    </StyledNativeBaseButton>
  );
};

Button.defaultProps = {};

export default Button;
