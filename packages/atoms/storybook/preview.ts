import '@storybook/addon-console';
import { addDecorator, addParameters } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import themes from './themes';
// @ts-ignore
import results from '../node_modules/.tmp/jestTestResults.json';

addDecorator(withTests({ results }));
addParameters({
  themeUi: { themes }
});
