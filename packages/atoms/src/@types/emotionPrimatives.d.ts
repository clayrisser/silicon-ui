// Definitions by:
// Junyoung Clare Jang <https://github.com/Ailrun>
// Sam Pettersson <https://github.com/iamsamwhoami>
// TypeScript Version: 2.3

declare module '@emotion/primitives' {
  import { ComponentType, ComponentClass, Ref, SFC } from 'react';
  import { Interpolation as BaseInterpolation } from 'create-emotion';
  import { StyleSheet } from 'react-primitives';
  import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

  namespace Styled {
    interface ArrayInterpolation<Props> extends Array<Interpolation<Props>> {}

    type FunctionInterpolation<Props> = (
      props: Props,
      context: any
    ) => Interpolation<Props>;

    type Interpolation<Props> =
      | BaseInterpolation
      | ArrayInterpolation<Props>
      | FunctionInterpolation<Props>;

    interface StyledOptions {
      e?: string;
      label?: string;
      target?: string;
      getShouldForwardProp?: () => (name: string) => boolean;
    }

    type Themed<P extends object, T extends object> = P & { theme: T };

    type StyledStatelessProps<P extends object, T extends object> = P & {
      theme?: T;
    };
    type StyledOtherProps<
      P extends object,
      T extends object,
      R
    > = StyledStatelessProps<P, T> & { innerRef?: R };

    type BasePrimitivesStyle = ViewStyle | TextStyle | ImageStyle;

    interface BaseArrayInterpolation extends Array<BaseInterpolation> {}

    interface ClassInterpolation extends Function {
      __emotion_real: any;
      __emotion_styles: BaseInterpolation[];
      __emotion_base: ClassInterpolation;
      __emotion_target: string;
      __emotion_forwardProp: undefined | null | ((arg: string) => boolean);
    }

    interface StyledComponentMethods<
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

    interface StyledStatelessComponent<
      Props extends object,
      InnerProps extends object,
      Theme extends object
    >
      extends ComponentClass<StyledStatelessProps<Props & InnerProps, Theme>>,
        ClassInterpolation,
        StyledComponentMethods<Props, InnerProps, Theme> {}

    interface StyledOtherComponent<
      Props extends object,
      InnerProps extends object,
      Theme extends object
    >
      extends ComponentClass<
          StyledOtherProps<Props & InnerProps, Theme, Ref<any>>
        >,
        ClassInterpolation,
        StyledComponentMethods<Props, InnerProps, Theme> {}

    type StyledComponent<
      Props extends object,
      InnerProps extends object,
      Theme extends object
    > =
      | StyledStatelessComponent<Props, InnerProps, Theme>
      | StyledOtherComponent<Props, InnerProps, Theme>;

    type CreateStyledStatelessComponent<
      InnerProps extends object,
      Theme extends object
    > = <Props extends object, OverridedTheme extends object = Theme>(
      ...args: Array<Interpolation<Themed<Props, OverridedTheme>>>
    ) => StyledStatelessComponent<Props, InnerProps, OverridedTheme>;

    type CreateStyledOtherComponent<
      InnerProps extends object,
      Theme extends object
    > = <Props extends object, OverridedTheme extends object = Theme>(
      ...args: Array<Interpolation<Themed<Props, OverridedTheme>>>
    ) => StyledOtherComponent<Props, InnerProps, OverridedTheme>;

    interface CreateStyledFunction<Theme extends object> {
      <IP extends object>(
        component: SFC<IP>,
        options?: StyledOptions
      ): CreateStyledStatelessComponent<IP, Theme>;

      <IP extends object>(
        component: ComponentClass<IP> | ComponentType<IP>,
        options?: StyledOptions
      ): CreateStyledOtherComponent<IP, Theme>;
    }

    interface CreateStyled<Theme extends object = any>
      extends CreateStyledFunction<Theme> {
      View: any;
      Text: any;
      Image: any;
    }

    type CreatePrimitivesStyled = (
      styleSheet: typeof StyleSheet,
      options: StyledOptions
    ) => CreateStyled;

    const createStyled: CreatePrimitivesStyled;

    type CreatePrimitivesCss = (
      styleSheet: typeof StyleSheet
    ) => (...args: BaseInterpolation[]) => string;

    const createCss: CreatePrimitivesCss;

    const View: any;

    const Text: any;

    const Image: any;
  }

  function Styled<Theme extends object, IP extends object>(
    component: ComponentClass<IP> | ComponentType<IP>,
    options?: Styled.StyledOptions
  ): Styled.CreateStyledOtherComponent<IP, Theme>;

  export = Styled;
}

declare module '@emotion/primitives-core' {
  export const createStyled: import('@emotion/primitives').CreatePrimitivesStyled;
}
