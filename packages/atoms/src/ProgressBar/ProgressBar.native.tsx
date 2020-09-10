import React, { FC } from 'react';
import { styled } from 'native-theme-ui';
import { ProgressBarAndroid } from 'react-native';
import {
  background,
  border,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import {
  ProgressBarProps,
  StyledProgressBarProps,
  antiForwardProgressBarPropsKeys,
  splitProps
} from './progressBarProps';

const StyledNativeBaseProgressBar = styled<StyledProgressBarProps>(
  ProgressBarAndroid,
  {
    forwardPropsBlacklist: antiForwardProgressBarPropsKeys
  }
)(compose(background, border, layout, position, shadow, space, typography));

const ProgressBar: FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const {
    customProgressBarProps,
    nativeProgressBarProps,
    styledProgressBarProps
  } = splitProps(props);

  const styledNativeBaseProgressBar = (
    <StyledNativeBaseProgressBar
      {...(customProgressBarProps as any)}
      {...nativeProgressBarProps}
      {...styledProgressBarProps}
    />
  );
  return styledNativeBaseProgressBar;
};

ProgressBar.defaultProps = {
  marginTop: 30
  //   progress: 30
};

export default ProgressBar;
