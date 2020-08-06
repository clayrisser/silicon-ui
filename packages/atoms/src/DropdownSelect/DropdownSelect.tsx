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
  DropdownSelectProps,
  DetailedHTMLDropdownSelectProps,
  splitProps
} from './dropdownSelectProps';

const HTMLSelect: StyledComponent<
  DetailedHTMLDropdownSelectProps,
  DropdownSelectProps,
  object
> = styled.select(
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

const DropdownSelect: FC<DropdownSelectProps> = (
  props: DropdownSelectProps
) => {
  const color = useColor(props);
  const {
    styledDropdownSelectProps,
    customDropdownSelectProps,
    touchableOpacityProps
  } = splitProps({
    ...props,
    color
  });

  return (
    <HTMLSelect
      {...customDropdownSelectProps}
      {...touchableOpacityProps}
      {...(styledDropdownSelectProps as any)}
      // onChange={(e: any) => console.log(e.target, e.target.value, 'detail')}
    />
  );
};

DropdownSelect.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'background',
  children: <></>,
  // value: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
  width: '100%',
  required: false
};

export default styled(DropdownSelect)`
  :active {
    opacity: ${({ activeOpacity }: DropdownSelectProps) => activeOpacity};
  }
`;
