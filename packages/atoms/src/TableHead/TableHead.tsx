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
import { ThProps, DetailedHTMLThProps, splitProps } from './tableHeadProps';

const HTMLTableHead: StyledComponent<
  DetailedHTMLThProps,
  ThProps,
  object
> = styled.th(
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

const Th: FC<ThProps> = (props: ThProps) => {
  const color = useColor(props);
  const { customThProps, styledThProps, nativeItemProps } = splitProps({
    ...props,
    color
  });
  return (
    <HTMLTableHead
      {...styledThProps}
      {...nativeItemProps}
      {...(customThProps as any)}
    />
  );
};

Th.defaultProps = {
  backgroundColor: 'transparent',
  autoContrast: false,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default Th;
