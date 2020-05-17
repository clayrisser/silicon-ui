import React, { FC, ReactNode } from 'react';
import { useTheme } from 'emotion-theming';
import Box from '../src/Box';
import { Theme } from '../src/themes';

// @ts-ignore
const document: any = window?.document || {};

export interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = (props: WrapperProps) => {
  const theme: Theme = useTheme();
  if (document?.body) {
    document.body.style.backgroundColor = theme.colors.background;
  }
  return <Box height="100%">{props.children}</Box>;
};

export default Wrapper;
