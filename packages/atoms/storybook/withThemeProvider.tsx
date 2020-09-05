import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { withThemeProvider as withWebThemeProvider } from 'storybook-addon-theme-ui';
import platform, { WEB } from '../src/platform';
import themes from '../src/themes';

const themeId = 0;

export default function withThemeProvider(): (story: any) => JSX.Element {
  if (platform === WEB) return withWebThemeProvider;
  return (story: any) => (
    <ThemeProvider theme={themes[themeId] || {}}>{story()}</ThemeProvider>
  );
}
