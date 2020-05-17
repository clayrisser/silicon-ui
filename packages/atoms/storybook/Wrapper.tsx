import React, { FC, ReactNode } from 'react';
import { useTheme } from 'emotion-theming';
import Box from '../src/Box';
import { Theme } from '../src/themes';

export interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = (props: WrapperProps) => {
  const theme: Theme = useTheme();
  // @ts-ignore
  const document: any = window?.document || {};
  if (document?.body) {
    document.body.style.backgroundColor = theme.colors.background;
  }
  return <Box>{props.children}</Box>;
};

export default Wrapper;
