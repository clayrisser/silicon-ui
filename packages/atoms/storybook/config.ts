import '@storybook/addon-console';
import { addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
// @ts-ignore
import results from '../node_modules/.tmp/jestTestResults.json';

addDecorator(withA11y);
addDecorator(withTests({ results }));
configure(require.context('../src', true, /\.story\.(md|(j|t)s)x?$/), module);
