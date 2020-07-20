import { DetailedHTMLProps, TableHTMLAttributes } from 'react';
import { Table } from 'react-native-table-component';
// import { NativeBase } from 'native-base';
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
import { Theme } from '../themes';

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

export interface NativeTableProps extends Table {}

export interface NativeItemProps extends Omit<Table, 'style'> {}

export interface CustomTableProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
}

export interface TableProps
  extends CustomTableProps,
    NativeTableProps,
    NativeItemProps,
    StyledTableProps {}

export const customTablePropsKeys = new Set(['autoContrast', 'theme']);

export const nativeTablePropsKeys = new Set<string>(['borderStyle']);

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
