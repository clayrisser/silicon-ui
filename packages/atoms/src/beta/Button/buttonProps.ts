import { NativeBase } from 'native-base';
import { ReactNode } from 'react';
import { SxStyleProp } from 'theme-ui';
import { ThemedStyledProps } from 'native-theme-ui';
import { createSplitProps } from '../../util';

export type ButtonProps = CustomButtonProps &
  StyledNativeBaseButtonProps &
  NativeTextProps;

export interface CustomButtonProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  children?: ReactNode;
}

export interface StyledNativeBaseButtonProps
  extends Omit<ThemedStyledProps<NativeBase.Button>, 'ref'> {}
export type StyledNativeBaseButtonSx = Partial<SxStyleProp>;

export interface NativeTextProps {}
export type NativeTextSx = Partial<SxStyleProp>;

interface SplitProps {
  customButtonProps: CustomButtonProps;
  nativeTextProps: NativeTextProps;
  styledNativeBaseButtonProps: StyledNativeBaseButtonProps;
}

export interface SplitSx {
  nativeTextSx: NativeTextSx;
  styledNativeBaseButtonSx: StyledNativeBaseButtonProps;
}

export const splitProps = createSplitProps<ButtonProps, SplitProps, SplitSx>(
  {
    customButtonProps: ['autoContrast', 'children'],
    nativeTextProps: []
  },
  'styledNativeBaseButtonProps',
  { nativeTextSx: /^((color)|(text.+)|(font.+))$/ },
  'styledNativeBaseButtonSx'
);
