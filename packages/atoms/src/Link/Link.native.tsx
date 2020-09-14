import React, { FC, useState, useEffect } from 'react';
import { TextProps, TouchableOpacity, Linking } from 'react-native';
import { styled, Text as DripsyText } from 'native-theme-ui';
import {
  LayoutProps,
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
  LinkProps,
  StyledLinkProps,
  StyledTextProps,
  antiForwardLinkPropsKeys,
  splitProps
} from './linkProps';

const StyledText = styled<StyledTextProps, TextProps & LayoutProps>(
  DripsyText,
  { isThemed: true }
)(compose(color, typography, layout));

const StyledNativeBaseLink = styled<StyledLinkProps>(TouchableOpacity, {
  forwardPropsBlacklist: antiForwardLinkPropsKeys
})(compose(background, border, layout, position, shadow, space));

const Link: FC<LinkProps> = (props: LinkProps) => {
  const [url, setUrl] = useState<string>('');
  const {
    styledLinkProps,
    customLinkProps,
    styledTextProps,
    nativeLinkProps
  } = splitProps(props);

  useEffect(() => {
    if (customLinkProps.href !== undefined) setUrl(customLinkProps.href);
  }, [customLinkProps.href]);

  function handlePress() {
    Linking.openURL(url);
  }

  const children =
    typeof customLinkProps.children === 'string' ? (
      <StyledText {...styledTextProps} width="100%">
        {customLinkProps.children}
      </StyledText>
    ) : (
      customLinkProps.children
    );
  return (
    <StyledNativeBaseLink
      {...styledLinkProps}
      {...nativeLinkProps}
      onPress={handlePress}
    >
      {children}
    </StyledNativeBaseLink>
  );
};

Link.defaultProps = {
  paddingLeft: 0,
  paddingTop: 0,
  fontSize: 2,
  color: ''
};

export default Link;
