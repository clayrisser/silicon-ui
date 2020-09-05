import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
import {
  ButtonProps,
  DetailedHTMLButtonProps,
  splitProps
} from './buttonProps';

const HTMLButton: StyledComponent<
  DetailedHTMLButtonProps,
  ButtonProps,
  object
> = styled.button(
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
  const { customButtonProps, styledButtonProps, styledTextProps } = splitProps(
    props
  );

  function handleClick(_e: any) {
    if (props.onPress) props.onPress();
  }

  function handleMouseDown(e: any) {
    if (props.onPressIn) props.onPressIn(e);
  }

  function handleMouseUp(e: any) {
    if (props.onPressOut) props.onPressOut(e);
  }

  return (
    <HTMLButton
      {...styledButtonProps}
      {...styledTextProps}
      {...(customButtonProps as any)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

Button.defaultProps = {
  activeOpacity: 0.8,
  autoContrast: false,
  backgroundColor: 'primary',
  borderRadius: 0,
  borderWidth: 0,
  children: '',
  padding: 0,
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
  width: '100%'
};

export default styled(Button)`
  cursor: pointer;
  font-weight: 500;
  transition-duration: 0.25s;
  transition-property: opacity;
  :active {
    opacity: ${({ activeOpacity }: ButtonProps) => activeOpacity};
  }
`;
