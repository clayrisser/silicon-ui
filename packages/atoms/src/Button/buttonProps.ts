import { NativeBase } from 'native-base';
import { Theme } from 'theme-ui';
import { ThemedStyledProps } from 'native-theme-ui';
import { createSplitProps } from '../util';

export interface CustomButtonProps {
  theme?: Theme;
}

export const customButtonProps = new Set(['theme']);

export interface ThemedNativeBaseButtonProps
  extends Omit<ThemedStyledProps<NativeBase.Button>, 'ref'> {}

export type ButtonProps = CustomButtonProps & ThemedNativeBaseButtonProps;

interface SplitProps {
  customButtonProps: CustomButtonProps;
  themedNativeBaseButtonProps: ThemedNativeBaseButtonProps;
}

export const splitProps = createSplitProps<ButtonProps, SplitProps>(
  { customButtonProps },
  'themedNativeBaseButtonProps'
);
