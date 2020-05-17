import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { Button as NativeButton } from 'react-native';
import { useTheme } from 'emotion-theming';
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
import Box from '../Box';
import { ButtonProps, StyledButtonProps } from './buttonProps';
import { Theme } from '../themes';
import { autoContrast } from '../color';

const StyledText: StyledComponent<
  StyledButtonProps,
  StyledButtonProps,
  any
> = styled.Text(
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

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const theme: Theme = useTheme();
  const clonedProps = {
    color: autoContrast(
      theme.colors[props.backgroundColor as string] ||
        (props.backgroundColor as string),
      theme.colors.inverseText || theme.colors.text,
      typeof props.autoContrast === 'undefined'
        ? theme.autoContrast
        : props.autoContrast
    ),
    ...props
  };
  if (!props.styled) {
    return (
      <Box
        marginBottom={clonedProps.marginBottom || clonedProps.mb}
        marginLeft={clonedProps.marginLeft || clonedProps.ml}
        marginRight={clonedProps.marginRight || clonedProps.mr}
        marginTop={clonedProps.marginTop || clonedProps.mt}
      >
        <NativeButton
          color={
            ((theme.colors[props.backgroundColor as string] ||
              props.backgroundColor) as unknown) as any
          }
          disabled={false}
          onPress={props.onPress!}
          title={props.children!}
        />
      </Box>
    );
  }
  return <StyledText {...clonedProps}>{props.children}</StyledText>;
};

Button.defaultProps = {
  backgroundColor: 'primary',
  children: '',
  textAlign: 'center',
  // fontFamily: 'body',
  fontSize: 0,
  // fontWeight: 'body',
  // lineHeight: 'body',
  marginBottom: 1,
  marginRight: 1,
  onClick: () => {},
  onFocus: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseOver: () => {},
  onPress: () => {},
  paddingBottom: 1,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 1,
  styled: false
};

export default Button;
