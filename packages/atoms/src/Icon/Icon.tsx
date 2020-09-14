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
import { IconProps, DetailedHTMLIconProps, splitProps } from './iconProps';

const HTMLIcon: StyledComponent<
  DetailedHTMLIconProps,
  IconProps,
  object
> = styled.i(
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

const Icon: FC<IconProps> = (props: IconProps) => {
  const { customIconProps, styledIconProps, nativeIconProps } = splitProps(
    props
  );

  return (
    <HTMLIcon
      {...styledIconProps}
      {...nativeIconProps}
      {...(customIconProps as any)}
      class="fa fa-camera-retro fa-lg"
    />
  );
};

Icon.defaultProps = {};

export default Icon;
