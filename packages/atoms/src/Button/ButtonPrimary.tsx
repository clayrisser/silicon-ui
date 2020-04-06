import React, { FC } from 'react';
import Button, { ButtonProps } from './Button';

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: FC<ButtonPrimaryProps> = (props: ButtonPrimaryProps) => (
  <Button {...props} />
);

ButtonPrimary.defaultProps = {
  backgroundColor: '#5333FF',
  borderRadius: 5,
  borderStyle: 'solid',
  borderWidth: 0,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  color: '#FFFFFF',
  fontFamily: 'Montserrat, sans-serif',
  minHeight: 32,
  minWidth: 112,
  pl: 3,
  pr: 3
};

export default ButtonPrimary;
