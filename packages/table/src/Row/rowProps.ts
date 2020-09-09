import { ReactNode, DetailedHTMLProps, TableHTMLAttributes } from 'react';
import { RowProps as NativeTableComponentRowProps } from 'react-native-table-component';
import { Theme } from 'theme-ui';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

export type DetailedHTMLRowProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export interface StyledRowProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeRowProps extends NativeTableComponentRowProps {}

export interface NativeItemProps {}

export interface CustomRowProps {
  children?: ReactNode;
  resizable?: boolean;
  theme?: Theme;
}

export interface RowProps
  extends CustomRowProps,
    NativeRowProps,
    NativeItemProps,
    StyledRowProps {}

export const customRowPropsKeys = new Set(['children', 'resizable', 'theme']);

export const nativeRowPropsKeys = new Set<string>([
  'borderStyle',
  'style',
  'data'
]);

export const nativeItemPropKeys = new Set([
  'bordered',
  'disabled',
  'error',
  'underline'
]);

export interface SplitProps {
  customRowProps: CustomRowProps;
  nativeRowProps: NativeRowProps;
  nativeItemProps: NativeItemProps;
  styledRowProps: StyledRowProps;
}

export function splitProps(props: RowProps): SplitProps {
  const styledRowProps: { [key: string]: any } = {};
  const customRowProps: { [key: string]: any } = {};
  const nativeRowProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customRowPropsKeys.has(key)) {
      customRowProps[key] = prop;
    } else if (nativeRowPropsKeys.has(key)) {
      nativeRowProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledRowProps[key] = prop;
    }
  });
  return {
    customRowProps,
    nativeRowProps,
    nativeItemProps,
    styledRowProps
  };
}

export const antiForwardRowPropsKeys = new Set<string>([]);
