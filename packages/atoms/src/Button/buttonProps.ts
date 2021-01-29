import { NativeBase } from 'native-base';
import { Theme } from 'theme-ui';
import { ThemedStyledProps } from 'native-theme-ui';

export type ThemedNativeBaseButtonProps = ThemedStyledProps<NativeBase.Button>;

export interface CustomButtonProps {
  theme?: Theme;
}

export type ButtonProps = CustomButtonProps & ThemedNativeBaseButtonProps;

export const customButtonPropsKeys = new Set(['theme']);

interface SplitProps {
  customButtonProps: CustomButtonProps;
  themedNativeBaseButtonProps: ThemedNativeBaseButtonProps;
}

export function splitProps(props: ButtonProps): SplitProps {
  const customButtonProps: { [key: string]: any } = {};
  const themedNativeBaseButtonProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customButtonPropsKeys.has(key)) {
      customButtonProps[key] = prop;
    } else {
      themedNativeBaseButtonProps[key] = prop;
    }
  });
  return {
    customButtonProps,
    themedNativeBaseButtonProps
  };
}
