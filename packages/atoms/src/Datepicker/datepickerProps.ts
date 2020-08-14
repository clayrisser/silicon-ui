import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { NativeBase } from 'native-base';
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

export type DetailedHTMLDatepickerProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface StyledDatepickerProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeDatepickerProps extends NativeBase.Input {}

export interface NativeItemProps extends Omit<NativeBase.Item, 'style'> {}

export interface CustomDatepickerProps {
  type?: string;
  disabled?: boolean;
  theme?: Theme;
  value?: string;
  max?: string;
  min?: string;
  required?: boolean;
  onChange?: (event: any) => void;
  onSelect?: (event: any) => void;
}

export interface DatepickerProps
  extends CustomDatepickerProps,
    NativeDatepickerProps,
    NativeItemProps,
    StyledDatepickerProps {}

export const customDatepickerPropsKeys = new Set(['type', 'disabled', 'theme']);

export const nativeDatepickerPropsKeys = new Set<string>([]);

export const nativeItemPropKeys = new Set([
  'bordered',
  'disabled',
  'error',
  'fixedLabel',
  'onPress',
  'picker'
]);

export interface SplitProps {
  customDatepickerProps: CustomDatepickerProps;
  nativeDatepickerProps: NativeDatepickerProps;
  nativeItemProps: NativeItemProps;
  styledDatepickerProps: StyledDatepickerProps;
}

export function splitProps(props: DatepickerProps): SplitProps {
  const styledDatepickerProps: { [key: string]: any } = {};
  const customDatepickerProps: { [key: string]: any } = {};
  const nativeDatepickerProps: { [key: string]: any } = {};
  const nativeItemProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customDatepickerPropsKeys.has(key)) {
      customDatepickerProps[key] = prop;
    } else if (nativeDatepickerPropsKeys.has(key)) {
      nativeDatepickerProps[key] = prop;
    } else if (nativeItemPropKeys.has(key)) {
      nativeItemProps[key] = prop;
    } else {
      styledDatepickerProps[key] = prop;
    }
  });
  return {
    customDatepickerProps,
    nativeDatepickerProps,
    nativeItemProps,
    styledDatepickerProps
  };
}

export const antiForwardInputPropsKeys = new Set<string>([]);
