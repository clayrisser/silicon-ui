import { LayoutProps, PositionProps, SpaceProps } from 'styled-system';
import { NativeBase } from 'native-base';
import { ReactNode, DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { Theme } from '../themes';

export type DetailedHTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export interface CustomFormProps {
  children?: ReactNode;
  theme?: Theme;
}

export interface WebFormProps {
  action?: string;
  method?: string;
}

export interface NativeFormProps extends NativeBase.Form {}

export interface StyledFormProps
  extends LayoutProps,
    PositionProps,
    SpaceProps {}

export interface FormProps
  extends CustomFormProps,
    NativeFormProps,
    StyledFormProps,
    WebFormProps {}

export const nativeFormPropsKeys = new Set<string>([]);

export const webFormPropsKeys = new Set<string>(['method', 'action']);

export const customFormPropsKeys = new Set<string>(['children', 'theme']);

export const antiForwardFormPropsKeys = new Set<string>([]);

export interface SplitProps {
  customFormProps: CustomFormProps;
  nativeFormProps: NativeFormProps;
  styledFormProps: StyledFormProps;
  webFormProps: WebFormProps;
}

export function splitProps(props: FormProps): SplitProps {
  const styledFormProps: { [key: string]: any } = {};
  const customFormProps: { [key: string]: any } = {};
  const nativeFormProps: { [key: string]: any } = {};
  const webFormProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customFormPropsKeys.has(key)) {
      customFormProps[key] = prop;
    } else if (nativeFormPropsKeys.has(key)) {
      nativeFormProps[key] = prop;
    } else if (webFormPropsKeys.has(key)) {
      webFormProps[key] = prop;
    } else {
      styledFormProps[key] = prop;
    }
  });
  return {
    customFormProps,
    nativeFormProps,
    styledFormProps,
    webFormProps
  };
}
