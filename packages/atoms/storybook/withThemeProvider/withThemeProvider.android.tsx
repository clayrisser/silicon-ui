import React from 'react';
import { makeDecorator, StoryGetter, StoryContext } from '@storybook/addons';
import ThemeProvider from '../../src/ThemeProvider';
import themeName from './themeName';
import themes, { ThemeMeta } from '../themes';

const withThemeProvider = makeDecorator({
  name: 'withThemeProvider',
  parameterName: 'themeUi',
  skipIfNoParametersOrOptions: false,
  wrapper: (story: StoryGetter, context: StoryContext) => {
    const { theme } = themes.find(({ name }: ThemeMeta) => name === themeName)!;
    return <ThemeProvider theme={theme}>{story(context)}</ThemeProvider>;
  }
});

export default withThemeProvider;
