import React, { FC } from 'react';
import Button, { ButtonProps as BaseButtonProps } from './Button';

export interface ButtonProps extends BaseButtonProps {
  secondary?: boolean;
}

export default Button;
