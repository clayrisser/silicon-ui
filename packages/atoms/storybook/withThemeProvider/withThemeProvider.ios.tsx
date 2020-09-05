import React from 'react';
import { makeDecorator, StoryGetter, StoryContext } from '@storybook/addons';
import ThemeProvider from '../../src/ThemeProvider';
import themeId from './themeId';
import themes from '../themes';

const withThemeProvider = makeDecorator({
  name: 'withThemeProvider',
  parameterName: 'themeUi',
  skipIfNoParametersOrOptions: false,
  wrapper: (story: StoryGetter, context: StoryContext) => (
    <ThemeProvider theme={themes[themeId]}>{story(context)}</ThemeProvider>
  )
});

export default withThemeProvider;
