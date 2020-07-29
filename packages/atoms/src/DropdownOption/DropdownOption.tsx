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
import useColor from '../hooks/useColor';
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
  const color = useColor(props);
  const {
    styledDropdownOptionProps,
    customDropdownOptionProps,
    touchableOpacityProps
  } = splitProps({
    ...props,
    color
  });

  return (
    <HTMLOption
      {...customDropdownOptionProps}
      {...touchableOpacityProps}
      {...(styledDropdownOptionProps as any)}
    />
  );
};

DropdownOption.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'background',
  children: <></>,
  value: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default styled(DropdownOption)`
  :active {
    opacity: ${({ activeOpacity }: DropdownOptionProps) => activeOpacity};
  }
`;
