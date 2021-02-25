import { NativeBase } from 'native-base';
import { SxStyleProp } from 'theme-ui';
import { ThemedStyledProps } from 'native-theme-ui';
import { createSplitProps } from '../../util';

export type InputProps = StyledNativeBaseInputProps & CustomInputProps;

export interface StyledNativeBaseInputProps
  extends Omit<ThemedStyledProps<NativeBase.Input>, 'ref'> {}
export type StyledNativeBaseInputSx = Partial<SxStyleProp>;

export interface CustomInputProps {
  placeholder?: string;
}

interface SplitProps {
  styledNativeBaseInputProps: StyledNativeBaseInputProps;
  customInputProps: CustomInputProps;
}

export interface SplitSx {
  styledNativeBaseInputSx: StyledNativeBaseInputProps;
}

export const splitProps = createSplitProps<InputProps, SplitProps, SplitSx>(
  { customInputProps: ['placeholder'] },
  'styledNativeBaseInputProps',
  {},
  'styledNativeBaseInputSx'
);
