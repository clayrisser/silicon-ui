import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { Button as NativeBaseButton } from 'native-base';
import { TextProps } from 'react-native';
import { useTheme } from 'emotion-theming';
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
import useColor from '../hooks/useColor';
import { Theme } from '../themes';
import { createStyled } from '../styled';
import {
  ButtonProps,
  StyledButtonProps,
  StyledTextProps,
  antiForwardButtonPropsKeys,
  splitProps
} from './buttonProps';

const StyledText: StyledComponent<
  StyledTextProps,
  TextProps & LayoutProps,
  any
> = styled.Text(compose(color, typography, layout));

const StyledNativeBaseButton = createStyled<StyledButtonProps>(
  NativeBaseButton,
  [background, border, layout, position, shadow, space],
  antiForwardButtonPropsKeys
);

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const color = useColor(props);
  const theme: Theme = useTheme();
  const {
    styledButtonProps,
    customButtonProps,
    styledTextProps,
    nativeButtonProps
  } = splitProps({
    color,
    ...props,
    ...(props.backgroundColor !== 'undefined'
      ? {
          backgroundColor:
            theme.colors[props.backgroundColor as string] ||
            props.backgroundColor
        }
      : {})
  });
  const children =
    typeof customButtonProps.children === 'string' ? (
      <StyledText {...styledTextProps} width="100%">
        {customButtonProps.children}
      </StyledText>
    ) : (
      props.children
    );
  return (
    <StyledNativeBaseButton {...styledButtonProps} {...nativeButtonProps}>
      {children}
    </StyledNativeBaseButton>
  );
};

Button.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
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
