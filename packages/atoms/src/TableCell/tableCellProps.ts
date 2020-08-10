import { DetailedHTMLProps, TdHTMLAttributes } from 'react';
import { Table } from 'react-native-table-component';
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

export type DetailedHTMLTdProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

export interface StyledTdProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeTdProps extends Table {}

export interface NativeItemProps extends Omit<Table, 'style'> {}

export interface CustomTdProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  style?: any;
}

export interface TdProps
  extends CustomTdProps,
    NativeTdProps,
    NativeItemProps,
    StyledTdProps {}

export const customTdPropsKeys = new Set(['autoContrast', 'theme', 'style']);

export const nativeTdPropsKeys = new Set<string>(['borderStyle', 'style']);

export const nativeItemPropKeys = new Set([
  'bordered',
  'disabled',
  'error',
  'underline'
]);

export interface SplitProps {
  customTdProps: CustomTdProps;
  nativeTdProps: NativeTdProps;
  nativeItemProps: NativeItemProps;
  styledTdProps: StyledTdProps;
}

export function splitProps(props: TdProps): SplitProps {
  const styledTdProps: { [key: string]: any } = {};
  const customTdProps: { [key: string]: any } = {};
  const nativeTdProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customTdPropsKeys.has(key)) {
      customTdProps[key] = prop;
    } else if (nativeTdPropsKeys.has(key)) {
      nativeTdProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledTdProps[key] = prop;
    }
  });
  return {
    customTdProps,
    nativeTdProps,
    nativeItemProps,
    styledTdProps
  };
}

export const antiForwardTdPropsKeys = new Set<string>([]);
