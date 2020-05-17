import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { withThemesProvider as webWithThemesProvider } from 'storybook-addon-emotion-theme';
import platform, { WEB } from '../src/platform';
import { Theme } from '../src/themes';

const themeId = 4;

export default function withThemesProvider(
  themes: Theme[],
  cb?: (theme: any) => void
): (story: any) => JSX.Element {
  if (platform === WEB) return webWithThemesProvider(themes, cb);
  return (story: any) => (
    <ThemeProvider theme={themes[themeId] || {}}>{story()}</ThemeProvider>
  );
}
