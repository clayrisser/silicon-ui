import { ComponentClass, ComponentType, SFC } from 'react';
import { StyleSheet } from 'react-primitives';
import { StyledComponent } from '@emotion/primitives';
import { createStyled as emotionCreateStyled } from '@emotion/primitives-core';
import { compose, styleFn } from 'styled-system';

export function createStyled<
  Props extends object,
  InnerProps extends object = Props
>(
  component: SFC<any> | ComponentClass<any> | ComponentType<any>,
  parsers: styleFn[],
  antiForwardPropsKeys?: Set<string>
): StyledComponent<Props, InnerProps, any> {
  return emotionCreateStyled(StyleSheet, {
    getShouldForwardProp: () => (prop: string): boolean => {
      return (
        prop !== 'theme' &&
        prop !== 'innerRef' &&
        (typeof antiForwardPropsKeys === 'undefined' ||
          !antiForwardPropsKeys.has(prop))
      );
    }
  })(component)(compose(...parsers));
}
