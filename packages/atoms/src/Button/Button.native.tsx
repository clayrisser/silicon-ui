import React, { FC } from 'react';
import { Button as NativeBaseButton } from 'native-base';
import { Text } from 'dripsy';
import { TextProps } from 'react-native';
import {
  LayoutProps,
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
import { createStyled } from '../styled';
import {
  ButtonProps,
  StyledTextProps,
  antiForwardButtonPropsKeys,
  splitProps
} from './buttonProps';

const StyledText = createStyled<StyledTextProps, TextProps & LayoutProps>(
  Text,
  { dripsy: true }
)(compose(color, typography, layout));

const StyledNativeBaseButton = createStyled<ButtonProps>(NativeBaseButton, {
  forwardPropsBlacklist: antiForwardButtonPropsKeys
})(compose(background, border, layout, position, shadow, space));

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    styledButtonProps,
    customButtonProps,
    styledTextProps,
    nativeButtonProps
  } = splitProps(props);
  const children =
    typeof customButtonProps.children === 'string' ? (
      <StyledText {...styledTextProps} width="100%">
        {customButtonProps.children}
      </StyledText>
    ) : (
      customButtonProps.children
    );
  return (
    <StyledNativeBaseButton {...styledButtonProps} {...nativeButtonProps}>
      {children}
    </StyledNativeBaseButton>
  );
};

Button.defaultProps = {
  autoContrast: false,
  backgroundColor: 'primary',
  children: '',
  fontSize: 2,
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  textAlign: 'center',
  width: '100%'
};

export default Button;
