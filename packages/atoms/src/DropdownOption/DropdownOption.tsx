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
import {
  DropdownOptionProps,
  DetailedHTMLDropdownOptionProps,
  splitProps
} from './dropdownOptionProps';

const HTMLOption: StyledComponent<
  DetailedHTMLDropdownOptionProps,
  DropdownOptionProps,
  object
> = styled.option(
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

const DropdownOption: FC<DropdownOptionProps> = (
  props: DropdownOptionProps
) => {
  const {
    styledDropdownOptionProps,
    customDropdownOptionProps,
    touchableOpacityProps
  } = splitProps(props);

  return (
    <HTMLOption
      {...customDropdownOptionProps}
      {...touchableOpacityProps}
      {...(styledDropdownOptionProps as any)}
    />
  );
};

DropdownOption.defaultProps = {
  backgroundColor: 'inverseText',
  children: <></>,
  value: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default styled(DropdownOption)``;
