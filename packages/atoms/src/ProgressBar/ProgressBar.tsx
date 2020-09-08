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
  ProgressBarProps,
  DetailedHTMLProgressProps,
  splitProps
} from './progressBarProps';

const HTMLProgress: StyledComponent<
  DetailedHTMLProgressProps,
  ProgressBarProps,
  object
> = styled.progress(
  compose(background, border, layout, position, shadow, space, typography)
);

const ProgressBar: FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const {
    customProgressBarProps,
    styledProgressBarProps,
    nativeProgressBarProps,
    nativeItemProps
  } = splitProps(props);

  return (
    <HTMLProgress
      {...styledProgressBarProps}
      {...nativeProgressBarProps}
      {...nativeItemProps}
      {...(customProgressBarProps as any)}
    />
  );
};

ProgressBar.defaultProps = {
  value: '40',
  max: '100'
};

export default ProgressBar;
