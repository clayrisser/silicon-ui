import { NativeBase } from 'native-base';
import { SxStyleProp } from 'theme-ui';
import { ThemedStyledProps } from 'native-theme-ui';
import { GestureResponderEvent, PanResponderGestureState } from 'react-native';
import { createSplitProps } from '../../util';

export type CheckBoxProps = StyledNativeBaseCheckBoxProps & TouchableProps;

export interface StyledNativeBaseCheckBoxProps
  extends Omit<ThemedStyledProps<NativeBase.CheckBox>, 'ref'> {}
export type StyledNativeBaseCheckBoxSx = Partial<SxStyleProp>;

export type NativeTextSx = Partial<SxStyleProp>;

export interface TouchableProps {
  onPress?: (
    e: GestureResponderEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    gestureState?: PanResponderGestureState
  ) => void;
}

interface SplitProps {
  styledNativeBaseCheckBoxProps: StyledNativeBaseCheckBoxProps;
  touchableProps: TouchableProps;
}

export interface SplitSx {
  styledNativeBaseCheckBoxSx: StyledNativeBaseCheckBoxProps;
}

export const splitProps = createSplitProps<CheckBoxProps, SplitProps, SplitSx>(
  {
    touchableProps: ['onPress']
  },
  'styledNativeBaseCheckBoxProps',
  { nativeTextSx: /^((color)|(text.+)|(font.+))$/ },
  'styledNativeBaseCheckBoxSx'
);
