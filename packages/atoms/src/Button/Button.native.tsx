import React, { FC, useState, useEffect } from 'react';
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
import platform, { IOS } from '../platform';
import { ButtonProps, StyledButtonProps } from './buttonProps';
import { Theme } from '../themes';
import { autoContrast } from '../color';
import { splitTouchableProps } from '../util';

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
  const [color, setColor] = useState(props.color as string);
  const [opacity, setOpacity] = useState(1);
  const theme: Theme = useTheme();

  useEffect(() => {
    setColor(
      autoContrast(
        props.backgroundColor
          ? theme.colors[props.backgroundColor as string] ||
              (props.backgroundColor as string)
          : theme.colors.primary,
        theme.colors.inverseText || theme.colors.text,
        typeof props.autoContrast === 'undefined'
          ? theme.autoContrast
          : props.autoContrast
      )
    );
  }, []);

  const [clonedProps, touchableProps] = splitTouchableProps<ButtonProps>({
    color,
    ...props
  });
  delete clonedProps.autoContrast;
  delete clonedProps.styled;
  delete clonedProps.theme;
  delete clonedProps.uppercase;
  delete touchableProps.onMouseEnter;
  delete touchableProps.onMouseLeave;
  delete touchableProps.onMouseOver;

  function handlePressIn() {
    setOpacity(0.8);
    if (props.onPressIn) props.onPressIn();
  }

  function handlePressOut() {
    setOpacity(props.opacity! as number);
    if (props.onPressOut) props.onPressOut();
  }

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
            platform === IOS
              ? (((theme.colors[props.color as string] ||
                  props.color) as unknown) as any)
              : (((theme.colors[props.backgroundColor as string] ||
                  props.backgroundColor) as unknown) as any)
          }
          disabled={false}
          onPress={props.onPress!}
          title={props.children!}
        />
      </Box>
    );
  }
  return (
    <Box
      {...touchableProps}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <StyledText {...clonedProps} opacity={opacity}>
        {props.uppercase ? props.children?.toUpperCase() : props.children}
      </StyledText>
    </Box>
  );
};

Button.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
  backgroundColor: 'primary',
  borderRadius: 2,
  borderWidth: 0,
  children: '',
  fontSize: 2,
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  styled: false,
  textAlign: 'center',
  uppercase: true,
  width: '100%'
};

export default Button;
