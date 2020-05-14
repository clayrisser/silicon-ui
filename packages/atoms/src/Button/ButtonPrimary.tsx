import React, { FC } from 'react';
import styled from '@emotion/styled';
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
  color: '#FFFFFF',
  fontFamily: 'Montserrat, sans-serif',
  minHeight: 32,
  minWidth: 112,
  pl: 3,
  pr: 3,
};

export default styled(ButtonPrimary)`
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
