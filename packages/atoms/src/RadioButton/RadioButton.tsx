import React from 'react';
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

const HTMLRadioButton = styled.input(
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
const RadioButton = () => {
  return <HTMLRadioButton type="radio" />;
};

RadioButton.defaultProps = {
  type: 'radio',
  checked: false
};

export default RadioButton;
