import { NativeBase } from 'native-base';
import { ReactNode } from 'react';
import { Theme, SxStyleProp } from 'theme-ui';
import { ThemedStyledProps } from 'native-theme-ui';
import { createSplitProps } from '../../util';

export type ButtonProps = CustomButtonProps &
  ThemedNativeBaseButtonProps &
  NativeTextProps;

export interface CustomButtonProps {
  children?: ReactNode;
  theme?: Theme;
}

export interface NativeTextProps {}
export type NativeTextSx = Partial<SxStyleProp>;

export interface ThemedNativeBaseButtonProps
  extends Omit<ThemedStyledProps<NativeBase.Button>, 'ref'> {}
export type ThemedNativeBaseButtonSx = Partial<SxStyleProp>;

interface SplitProps {
  customButtonProps: CustomButtonProps;
  nativeTextProps: NativeTextProps;
  themedNativeBaseButtonProps: ThemedNativeBaseButtonProps;
}

export interface SplitSx {
  nativeTextSx: NativeTextSx;
  themedNativeBaseButtonSx: ThemedNativeBaseButtonProps;
}

export const splitProps = createSplitProps<ButtonProps, SplitProps, SplitSx>(
  { customButtonProps: ['children', 'theme'], nativeTextProps: [] },
  'themedNativeBaseButtonProps',
  { nativeTextSx: /^((color)|(text.+))$/ },
  'themedNativeBaseButtonSx'
);
