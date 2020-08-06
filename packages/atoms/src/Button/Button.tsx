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
import useColor from '../hooks/useColor';
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
  const color = useColor(props);
  const { customButtonProps, styledButtonProps, styledTextProps } = splitProps({
    ...props,
    color
  });

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
  borderRadius: 2,
  borderWidth: 0,
  children: '',
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  width: '100%',
  name: 'first',
  type: 'next',
  className: 'className'
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
