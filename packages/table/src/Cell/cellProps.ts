import { DetailedHTMLProps, TdHTMLAttributes, ReactNode } from 'react';
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

export type DetailedHTMLTdProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

export interface StyledCellProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface CustomCellProps {
  children?: ReactNode;
  grabWidth?: number;
  resizable?: boolean;
  style?: any;
  theme?: Theme;
}

export interface CellProps extends CustomCellProps, StyledCellProps {}

export interface SplitProps {
  customCellProps: CustomCellProps;
  styledCellProps: StyledCellProps;
}

export const customCellPropsKeys = new Set([
  'children',
  'grabWidth',
  'resizable',
  'theme'
]);

export function splitProps(props: CellProps): SplitProps {
  const styledCellProps: { [key: string]: any } = {};
  const customCellProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customCellPropsKeys.has(key)) {
      customCellProps[key] = prop;
    } else {
      styledCellProps[key] = prop;
    }
  });
  return {
    customCellProps,
    styledCellProps
  };
}

export const antiForwardTdPropsKeys = new Set<string>([]);
