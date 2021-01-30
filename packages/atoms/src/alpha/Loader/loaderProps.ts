import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Theme } from 'theme-ui';
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
import { NativeBase } from 'native-base';

export type DetailedHTMLLoaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface StyledLoaderProps
  extends BackgroundProps,
    BackgroundColorProps,
    BorderProps,
    LayoutProps,
    OpacityProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface NativeLoaderProps extends Omit<NativeBase.Spinner, 'color'> {}

export interface CustomLoaderProps {
  color?: string;
  theme?: Theme;
}

export interface LoaderProps extends StyledLoaderProps, CustomLoaderProps {}

export const antiForwardLoaderPropsKeys = new Set<string>([]);

export const customLoaderPropsKeys = new Set<string>([]);

export const nativeLoaderPropsKeys = new Set(['color']);

interface SplitProps {
  customLoaderProps: CustomLoaderProps;
  nativeLoaderProps: NativeLoaderProps;
  styledLoaderProps: StyledLoaderProps;
}

export function splitProps(props: LoaderProps): SplitProps {
  const customLoaderProps: { [key: string]: any } = {};
  const nativeLoaderProps: { [key: string]: any } = {};
  const styledLoaderProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customLoaderPropsKeys.has(key)) {
      customLoaderProps[key] = prop;
    } else if (nativeLoaderPropsKeys.has(key)) {
      nativeLoaderProps[key] = prop;
    } else {
      styledLoaderProps[key] = prop;
    }
  });
  return {
    customLoaderProps,
    nativeLoaderProps,
    styledLoaderProps
  };
}
