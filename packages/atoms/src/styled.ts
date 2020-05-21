import { ComponentClass, ComponentType, SFC } from 'react';
import { StyleSheet } from 'react-primitives';
import { StyledComponent, Interpolation, Themed } from '@emotion/primitives';
import { createStyled as emotionCreateStyled } from '@emotion/primitives-core';
import { compose, styleFn } from 'styled-system';

export function createStyled<
  Props extends object,
  InnerProps extends object = Props
>(
  component: SFC<object> | ComponentClass<object> | ComponentType<object>,
  parsers: styleFn[],
  antiForwardButtonPropsKeys?: Set<string>
): StyledComponent<Props, InnerProps, any> {
  return emotionCreateStyled(StyleSheet, {
    getShouldForwardProp: () => (prop: string): boolean => {
      return (
        prop !== 'theme' &&
        prop !== 'innerRef' &&
        (typeof antiForwardButtonPropsKeys === 'undefined' ||
          !antiForwardButtonPropsKeys.has(prop))
      );
    }
  })(component)(compose(...parsers));
}
