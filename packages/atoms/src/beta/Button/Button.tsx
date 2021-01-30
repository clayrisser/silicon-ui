import React, { FC } from 'react';
import { NativeBase, Button as NativeBaseButton } from 'native-base';
import { styled, Text as ThemedText } from 'native-theme-ui';
import { SxStyleProp } from 'theme-ui';
import useColor from '../../hooks/useColor';
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
    styledNativeBaseButtonProps
  } = splitProps(props, defaultSx);
  const color = useColor(props, sx);

  function renderChildren() {
    const { children } = customButtonProps;
    if (typeof children === 'string') {
      return (
        <ThemedText sx={{ ...nativeTextSx, color, width: '100%' }}>
          {children}
        </ThemedText>
      );
    }
    return children;
  }

  return (
    <StyledNativeBaseButton {...styledNativeBaseButtonProps} sx={sx}>
      {renderChildren()}
    </StyledNativeBaseButton>
  );
};

Button.defaultProps = {};

export default Button;
