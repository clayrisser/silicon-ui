import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/primitives';
import { TouchableOpacity, ViewProps } from 'react-native';
import { View } from 'dripsy';
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
import { createStyled } from '../styled';

const StyledView = createStyled<StyledViewProps, ViewProps>(View, {
  dripsy: true
})(compose(color, layout, position, shadow, space, typography));

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
