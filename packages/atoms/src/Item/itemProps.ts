import { NativeBase } from 'native-base';
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  BackgroundColorProps,
  BackgroundProps,
  BorderProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
  SpaceProps
} from 'styled-system';
import { Theme } from '../themes';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface NativeItemProps extends NativeBase.Item {}

export interface CustomItemProps {
  children?: ReactNode;
  theme?: Theme;
}

export interface StyledItemProps
  extends BackgroundColorProps,
    BackgroundProps,
    BorderProps,
    LayoutProps,
    OpacityProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface ItemProps
  extends NativeItemProps,
    CustomItemProps,
    StyledItemProps {}

export const customItemPropsKeys = new Set(['theme']);

export const nativeItemPropKeys = new Set([
  'bordered',
  'disabled',
  'error',
  'fixedLabel',
  'floatingLabel',
  'inlineLabel',
  'last',
  'onPress',
  'picker',
  'placeholder',
  'placeholderLabel',
  'regular',
  'rounded',
  'secureTextEntry',
  'stackedLabel',
  'success',
  'underline'
]);

export const antiForwardItemPropsKeys = new Set<string>([]);

export interface SplitProps {
  customItemProps: CustomItemProps;
  nativeItemProps: NativeItemProps;
  styledItemProps: StyledItemProps;
}

export function splitProps(props: ItemProps): SplitProps {
  const styledItemProps: { [key: string]: any } = {};
  const customItemProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customItemPropsKeys.has(key)) {
      customItemProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledItemProps[key] = prop;
    }
  });
  return {
    customItemProps,
    nativeItemProps,
    styledItemProps
  };
}
