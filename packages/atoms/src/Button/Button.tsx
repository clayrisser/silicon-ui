import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
import ButtonProps, { StyledButtonProps } from './buttonProps';
import { Theme } from '../themes';
import { autoContrast } from '../color';

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
  const theme: Theme = useTheme();
  const clonedProps: ButtonProps = {
    backgroundColor: theme.colors.primary,
    color: props.autoContrast
      ? autoContrast(theme.colors.primary, theme.colors.text)
      : theme.colors.text,
    ...props
  };
  delete clonedProps.onPress;
  delete clonedProps.borderColor;

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.onPress!();
    const _props: any = props;
    _props.onClick(e);
  }

  return (
    <div>
      color: {props.color}
      <HTMLButton
        onClick={handleOnClick}
        {...(clonedProps as DetailedHTMLButtonProps)}
      />
    </div>
  );
};

Button.defaultProps = {
  autoContrast: true,
  children: '',
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseOver: () => {},
  onPress: () => {},
  styled: false
};

export default Button;
