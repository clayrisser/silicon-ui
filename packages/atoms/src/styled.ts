import { ComponentClass, ComponentType, SFC } from 'react';
import { StyleSheet } from 'react-primitives';
import { ThemedOptions } from 'dripsy/lib/typescript/css/types';
import { createStyled as emotionCreateStyled } from '@emotion/primitives-core';
import { createThemedComponent } from 'dripsy';
import {
  Interpolation,
  StyledOptions as EmotionStyledOptions,
  StyledOtherComponent,
  StyledStatelessComponent,
  Themed
} from '@emotion/primitives';

export interface StyledOptions
  extends Omit<EmotionStyledOptions, 'getShouldForwardProp'> {
  dripsy?: boolean;
  forwardPropsBlacklist?: Set<string>;
  forwardPropsWhitelist?: Set<string>;
  shouldForwardProp?: (name: string) => boolean;
}

export type CreateStyledComponent<
  Props extends object,
  InnerProps extends object,
  Theme extends object
> =
  | ((
      ...args: Array<Interpolation<Themed<Props, Theme>>>
    ) => StyledStatelessComponent<Props, InnerProps, Theme>)
  | ((
      ...args: Array<Interpolation<Themed<Props, Theme>>>
    ) => StyledOtherComponent<Props, InnerProps, Theme>);

export function createStyled<
  Props extends object,
  InnerProps extends object = Props
>(
  component: SFC<any> | ComponentClass<any> | ComponentType<any>,
  options?: StyledOptions,
  themedOptions?: ThemedOptions
): CreateStyledComponent<Props, InnerProps, any> {
  const shouldForwardProp =
    options?.shouldForwardProp ||
    ((prop: string): boolean => {
      return (
        prop !== 'theme' &&
        prop !== 'innerRef' &&
        (typeof options?.forwardPropsWhitelist !== 'undefined'
          ? options.forwardPropsWhitelist.has(prop)
          : typeof options?.forwardPropsBlacklist === 'undefined' ||
            !options?.forwardPropsBlacklist.has(prop))
      );
    });
  return emotionCreateStyled(StyleSheet, {
    getShouldForwardProp: () => shouldForwardProp
  })(
    options?.dripsy
      ? component
      : createThemedComponent(component, themedOptions)
  );
}
