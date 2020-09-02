import { DetailedHTMLProps, ThHTMLAttributes } from 'react';
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

export type DetailedHTMLThProps = DetailedHTMLProps<
  ThHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

export interface StyledThProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeThProps extends Table {}

export interface NativeItemProps extends Omit<Table, 'style'> {}

export interface CustomThProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  style?: any;
}

export interface ThProps
  extends CustomThProps,
    NativeThProps,
    NativeItemProps,
    StyledThProps {}

export const customThPropsKeys = new Set(['autoContrast', 'theme', 'style']);

export const nativeThPropsKeys = new Set<string>(['borderStyle', 'style']);

export const nativeItemPropKeys = new Set([
  'bordered',
  'disabled',
  'error',
  'underline'
]);

export interface SplitProps {
  customThProps: CustomThProps;
  nativeThProps: NativeThProps;
  nativeItemProps: NativeItemProps;
  styledThProps: StyledThProps;
}

export function splitProps(props: ThProps): SplitProps {
  const styledThProps: { [key: string]: any } = {};
  const customThProps: { [key: string]: any } = {};
  const nativeThProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customThPropsKeys.has(key)) {
      customThProps[key] = prop;
    } else if (nativeThPropsKeys.has(key)) {
      nativeThProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledThProps[key] = prop;
    }
  });
  return {
    customThProps,
    nativeThProps,
    nativeItemProps,
    styledThProps
  };
}

export const antiForwardThPropsKeys = new Set<string>([]);
