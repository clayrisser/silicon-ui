import React, { FC } from 'react';
import { styled } from 'native-theme-ui';
import {
  Icon as NativeBaseIcon,
  Item as NativeBaseItem,
  NativeBase
} from 'native-base';
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
import useItem from '../hooks/useItem';
import {
  IconProps,
  StyledIconProps,
  antiForwardIconPropsKeys,
  splitProps
} from './iconProps';

const StyledNativeBaseIcon = styled<StyledIconProps, NativeBase.Icon>(
  NativeBaseIcon,
  { forwardPropsBlacklist: antiForwardIconPropsKeys }
)(
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
  const item = useItem();
  const { customIconProps, nativeIconProps, styledIconProps } = splitProps(
    props
  );
  const styledNativeBaseIcon = (
    <StyledNativeBaseIcon
      {...(customIconProps as any)}
      {...nativeIconProps}
      {...styledIconProps}
    />
  );
  if (item.hasItemParent) return styledNativeBaseIcon;
  return <NativeBaseItem>{styledNativeBaseIcon}</NativeBaseItem>;
};

Icon.defaultProps = {
  name: 'glass',
  android: 'glass',
  ios: 'glass',
  fontSize: 27
};

export default Icon;
