import { DetailedHTMLProps, TableHTMLAttributes, ReactNode } from 'react';
import { TableProps as NativeTableComponentProps } from 'react-native-table-component';
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

export type DetailedHTMLTableProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export interface StyledTableProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeTableProps extends NativeTableComponentProps {}

export interface NativeItemProps {}

export interface CustomTableProps {
  children?: ReactNode;
  resizable?: boolean;
  style?: any;
  theme?: Theme;
}

export interface TableProps
  extends CustomTableProps,
    NativeTableProps,
    NativeItemProps,
    StyledTableProps {}

export const customTablePropsKeys = new Set([
  'children',
  'resizable',
  'style',
  'theme'
]);

export const nativeTablePropsKeys = new Set<string>(['borderStyle', 'style']);

export const nativeItemPropKeys = new Set([
  'bordered',
  'disabled',
  'error',
  'underline'
]);

export interface SplitProps {
  customTableProps: CustomTableProps;
  nativeTableProps: NativeTableProps;
  nativeItemProps: NativeItemProps;
  styledTableProps: StyledTableProps;
}

export function splitProps(props: TableProps): SplitProps {
  const styledTableProps: { [key: string]: any } = {};
  const customTableProps: { [key: string]: any } = {};
  const nativeTableProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customTablePropsKeys.has(key)) {
      customTableProps[key] = prop;
    } else if (nativeTablePropsKeys.has(key)) {
      nativeTableProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledTableProps[key] = prop;
    }
  });
  return {
    customTableProps,
    nativeTableProps,
    nativeItemProps,
    styledTableProps
  };
}

export const antiForwardTablePropsKeys = new Set<string>([]);
