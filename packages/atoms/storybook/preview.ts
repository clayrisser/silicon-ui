import '@storybook/addon-console';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import themes from './themes';
// @ts-ignore
import results from '../node_modules/.tmp/jestTestResults.json';

addDecorator(withA11y as any);
addDecorator(withTests({ results }));
addParameters({
  themeUi: { themes }
});
