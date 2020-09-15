import React, { FC, ReactNode } from 'react';
import { useThemeUI } from 'theme-ui';
// import Box from '../src/Box';

// @ts-ignore
const document: any = window?.document || {};

export interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = (props: WrapperProps) => {
  const { theme } = useThemeUI();
  if (document?.body) {
    document.body.style.backgroundColor = theme.colors?.background;
  }
  return <>{props.children}</>;
};

export default Wrapper;
