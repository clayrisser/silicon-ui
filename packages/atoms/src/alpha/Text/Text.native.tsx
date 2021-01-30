import React, { FC } from 'react';
import {
  TouchableOpacity,
  ViewProps,
  TextProps as NativeTextProps
} from 'react-native';
import {
  styled,
  Text as DripsyText,
  View as DripsyView
} from 'native-theme-ui';
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

const StyledView = styled<StyledViewProps, ViewProps>(DripsyView, {
  isThemed: true
})(compose(color, layout, position, shadow, space, typography));

const StyledText = styled<StyledTextProps, NativeTextProps>(DripsyText, {
  isThemed: true
})(compose(color, typography, layout));

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
  children: '',
  fontSize: 0
};

export default Text;
