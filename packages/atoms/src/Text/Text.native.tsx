import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { TouchableOpacity } from 'react-native';
import {
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import {
  StyledTextProps,
  StyledViewProps,
  TextProps,
  splitProps
} from './textProps';

const StyledView: StyledComponent<
  StyledViewProps,
  StyledViewProps,
  any
> = styled.View(compose(position, shadow, space));

const StyledText: StyledComponent<
  StyledTextProps,
  StyledTextProps,
  any
> = styled.Text(compose(color, typography, layout));

const Text: FC<TextProps> = (props: TextProps) => {
  const {
    customTextProps,
    nativeTextProps,
    styledTextProps,
    styledViewProps,
    touchableOpacityProps
  } = splitProps(props);
  if (Object.keys(touchableOpacityProps).length) {
    return (
      <TouchableOpacity {...touchableOpacityProps}>
        <StyledView {...styledViewProps} {...nativeTextProps}>
          <StyledText {...styledTextProps}>
            {customTextProps.children}
          </StyledText>
        </StyledView>
      </TouchableOpacity>
    );
  }
  return (
    <StyledView {...styledViewProps} {...nativeTextProps}>
      <StyledText {...styledTextProps}>{customTextProps.children}</StyledText>
    </StyledView>
  );
};

Text.defaultProps = {
  // TODO: lookup fontinfo
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
  children: '',
  fontSize: 0
};

export default Text;
