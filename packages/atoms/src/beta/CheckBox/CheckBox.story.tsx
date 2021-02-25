import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CheckBox from './CheckBox';
import Wrapper from '../../../storybook/Wrapper';
import docs from './docs';
import storiesOf from '../../../storybook/storiesOf';
import withThemeProvider from '../../../storybook/withThemeProvider';

export const CheckBoxStoryWithKnobs: FC = () => (
  <Wrapper>
    <CheckBox onPress={action('onPress')} />
  </Wrapper>
);

storiesOf('Beta/CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => <CheckBoxStoryWithKnobs />);
