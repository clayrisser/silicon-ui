import { ReactNode, DetailedHTMLProps, TableHTMLAttributes } from 'react';
import { Rows } from 'react-native-table-component';
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

export type DetailedHTMLTableRowsProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export interface StyledTableRowProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeTableRowProps extends Rows {}

export interface NativeItemProps extends Omit<Rows, 'style'> {}

export interface CustomTableRowProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  children?: ReactNode;
  data?: any;
  style?: object;
  textStyle?: object;
}

export interface TableRowProps
  extends CustomTableRowProps,
    NativeTableRowProps,
    NativeItemProps,
    StyledTableRowProps {}

export const customTableRowPropsKeys = new Set([
  'autoContrast',
  'theme',
  'children',
  'data'
]);

export const nativeTableRowPropsKeys = new Set<string>([
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
  customTableRowProps: CustomTableRowProps;
  nativeTableRowProps: NativeTableRowProps;
  nativeItemProps: NativeItemProps;
  styledTableRowProps: StyledTableRowProps;
}

export function splitProps(props: TableRowProps): SplitProps {
  const styledTableRowProps: { [key: string]: any } = {};
  const customTableRowProps: { [key: string]: any } = {};
  const nativeTableRowProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customTableRowPropsKeys.has(key)) {
      customTableRowProps[key] = prop;
    } else if (nativeTableRowPropsKeys.has(key)) {
      nativeTableRowProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledTableRowProps[key] = prop;
    }
  });
  return {
    customTableRowProps,
    nativeTableRowProps,
    nativeItemProps,
    styledTableRowProps
  };
}

export const antiForwardTableRowPropsKeys = new Set<string>([]);
