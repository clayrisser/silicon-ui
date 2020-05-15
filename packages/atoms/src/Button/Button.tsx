import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
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
import ButtonProps, { StyledButtonProps } from './buttonProps';

export type DetailedHTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const HTMLButton: StyledComponent<
  DetailedHTMLButtonProps,
  StyledButtonProps,
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
  const clonedProps = { ...props };
  delete clonedProps.onPress;

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.onPress!();
    const _props: any = props;
    _props.onClick(e);
  }

  return (
    <HTMLButton
      onClick={handleOnClick}
      {...(clonedProps as DetailedHTMLButtonProps)}
    />
  );
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseOver: () => {},
  onPress: () => {},
  styled: false
};

export default Button;
