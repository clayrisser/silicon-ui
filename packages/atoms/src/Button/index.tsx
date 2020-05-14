import React, { FC } from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { ButtonProps as BaseButtonProps } from './Button';

export interface ButtonProps extends BaseButtonProps {
  secondary?: boolean;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  if (props.secondary) return <ButtonSecondary {...props} />;
  return <ButtonPrimary {...props} />;
};

Button.defaultProps = {
  secondary: false,
};

export default Button;
