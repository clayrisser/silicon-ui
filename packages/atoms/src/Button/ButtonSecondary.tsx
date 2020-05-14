import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import Button, { ButtonProps } from './Button';

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: FC<ButtonPrimaryProps> = (props: ButtonPrimaryProps) => {
  const [borderWidth, setBorderWidth] = useState(props.borderWidth);

  function handleMouseEnter() {
    setBorderWidth(2);
    props.onMouseEnter();
  }

  function handleMouseLeave() {
    setBorderWidth(props.borderWidth);
    props.onMouseLeave();
  }

  return (
    <Button
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      borderWidth={borderWidth}
    />
  );
};

ButtonPrimary.defaultProps = {
  backgroundColor: '#FFFFFF',
  borderColor: '#5333FF',
  borderRadius: 5,
  borderStyle: 'solid',
  borderWidth: 1,
  color: '#5333FF',
  fontFamily: 'Montserrat, sans-serif',
  minHeight: 32,
  minWidth: 112,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  pl: 3,
  pr: 3,
};

export default styled(ButtonPrimary)`
  cursor: pointer;
`;
