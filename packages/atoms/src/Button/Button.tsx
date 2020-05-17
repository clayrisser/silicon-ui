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
import { ButtonProps, StyledButtonProps } from './buttonProps';
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
    color: autoContrast(
      props.backgroundColor
        ? theme.colors[props.backgroundColor as string] ||
            (props.backgroundColor as string)
        : theme.colors.primary,
      theme.colors.inverseText || theme.colors.text,
      typeof props.autoContrast === 'undefined'
        ? theme.autoContrast
        : props.autoContrast
    ),
    ...props
  };
  delete clonedProps.autoContrast;
  delete clonedProps.onPress;
  delete clonedProps.styled;

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.onPress!();
    const _props: any = props;
    _props.onClick(e);
  }

  return (
    <HTMLButton
      style={{
        cursor: 'pointer'
      }}
      onClick={handleOnClick}
      {...(clonedProps as DetailedHTMLButtonProps)}
    />
  );
};

Button.defaultProps = {
  backgroundColor: 'primary',
  children: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
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
