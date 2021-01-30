import { NativeBase } from 'native-base';
import { ReactNode } from 'react';
import { Theme } from 'theme-ui';
import { ThemedStyledProps } from 'native-theme-ui';
import { createSplitProps } from '../util';

export interface CustomButtonProps {
  children?: ReactNode;
  theme?: Theme;
}

export const customButtonProps = new Set(['children', 'theme']);

export interface NativeTextProps {}

export const nativeTextProps = new Set([]);

export interface ThemedNativeBaseButtonProps
  extends Omit<ThemedStyledProps<NativeBase.Button>, 'ref'> {}

export type ButtonProps = CustomButtonProps &
  ThemedNativeBaseButtonProps &
  NativeTextProps;

interface SplitProps {
  customButtonProps: CustomButtonProps;
  nativeTextProps: NativeTextProps;
  themedNativeBaseButtonProps: ThemedNativeBaseButtonProps;
}

export const splitProps = createSplitProps<ButtonProps, SplitProps>(
  { customButtonProps, nativeTextProps },
  'themedNativeBaseButtonProps'
);
