// Definitions by:
// Junyoung Clare Jang <https://github.com/Ailrun>
// Sam Pettersson <https://github.com/iamsamwhoami>
// TypeScript Version: 2.3

declare module '@emotion/primitives' {
  import { ComponentType, ComponentClass, Ref, SFC } from 'react';
  import { Interpolation as BaseInterpolation } from 'create-emotion';
  import { StyleSheet } from 'react-primitives';
  import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

  export interface ArrayInterpolation<Props>
    extends Array<Interpolation<Props>> {}
  export type FunctionInterpolation<Props> = (
    props: Props,
    context: any
  ) => Interpolation<Props>;

  export type Interpolation<Props> =
    | BaseInterpolation
    | ArrayInterpolation<Props>
    | FunctionInterpolation<Props>;

  export interface StyledOptions {
    e?: string;
    label?: string;
    target?: string;
    shouldForwardProp?: (name: string) => boolean;
  }

  export type Themed<P extends object, T extends object> = P & { theme: T };

  export type StyledStatelessProps<P extends object, T extends object> = P & {
    theme?: T;
  };
  export type StyledOtherProps<
    P extends object,
    T extends object,
    R
  > = StyledStatelessProps<P, T> & { innerRef?: R };

  export type BasePrimitivesStyle = ViewStyle | TextStyle | ImageStyle;

  export interface BaseArrayInterpolation extends Array<BaseInterpolation> {}

  export interface ClassInterpolation extends Function {
    __emotion_real: any;
    __emotion_styles: BaseInterpolation[];
    __emotion_base: ClassInterpolation;
    __emotion_target: string;
    __emotion_forwardProp: undefined | null | ((arg: string) => boolean);
  }

  export interface StyledComponentMethods<
    Props extends object,
    _InnerProps extends object,
    Theme extends object
  > {
    withComponent<IP extends object>(
      component: SFC<IP>,
      options?: StyledOptions
    ): StyledStatelessComponent<Props, IP, Theme>;

    withComponent<IP extends object>(
      component: ComponentClass<IP> | ComponentType<IP>,
      options?: StyledOptions
    ): StyledOtherComponent<Props, IP, Theme>;
  }

  export interface StyledStatelessComponent<
    Props extends object,
    InnerProps extends object,
    Theme extends object
  >
    extends ComponentClass<StyledStatelessProps<Props & InnerProps, Theme>>,
      ClassInterpolation,
      StyledComponentMethods<Props, InnerProps, Theme> {}

  export interface StyledOtherComponent<
    Props extends object,
    InnerProps extends object,
    Theme extends object
  >
    extends ComponentClass<
        StyledOtherProps<Props & InnerProps, Theme, Ref<any>>
      >,
      ClassInterpolation,
      StyledComponentMethods<Props, InnerProps, Theme> {}

  export type StyledComponent<
    Props extends object,
    InnerProps extends object,
    Theme extends object
  > =
    | StyledStatelessComponent<Props, InnerProps, Theme>
    | StyledOtherComponent<Props, InnerProps, Theme>;

  export type CreateStyledStatelessComponent<
    InnerProps extends object,
    Theme extends object
  > = <Props extends object, OverridedTheme extends object = Theme>(
    ...args: Array<Interpolation<Themed<Props, OverridedTheme>>>
  ) => StyledStatelessComponent<Props, InnerProps, OverridedTheme>;

  export type CreateStyledOtherComponent<
    InnerProps extends object,
    Theme extends object
  > = <Props extends object, OverridedTheme extends object = Theme>(
    ...args: Array<Interpolation<Themed<Props, OverridedTheme>>>
  ) => StyledOtherComponent<Props, InnerProps, OverridedTheme>;

  export interface CreateStyledFunction<Theme extends object> {
    <IP extends object>(
      component: SFC<IP>,
      options?: StyledOptions
    ): CreateStyledStatelessComponent<IP, Theme>;

    <IP extends object>(
      component: ComponentClass<IP> | ComponentType<IP>,
      options?: StyledOptions
    ): CreateStyledOtherComponent<IP, Theme>;
  }

  export interface CreateStyled<Theme extends object = any>
    extends CreateStyledFunction<Theme> {}

  export type CreatePrimitivesStyled = (
    styleSheet: typeof StyleSheet,
    options: StyledOptions
  ) => CreateStyled;

  export const createStyled: CreatePrimitivesStyled;

  export type CreatePrimitivesCss = (
    styleSheet: typeof StyleSheet
  ) => (...args: BaseInterpolation[]) => string;

  export const createCss: CreatePrimitivesCss;

  export const View: any;

  export const Text: any;

  export const Image: any;
}
