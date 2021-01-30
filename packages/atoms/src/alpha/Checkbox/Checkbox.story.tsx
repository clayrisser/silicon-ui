import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
import docs from './docs';
import Wrapper from '../../../storybook/Wrapper';
import storiesOf from '../../../storybook/storiesOf';
import withThemeProvider from '../../../storybook/withThemeProvider';

storiesOf('Alpha/Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Checkbox.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Checkbox
        disabled={boolean('disabled', false)}
        onPress={action('onPress')}
        checked={boolean('checked', false)}
      />
    </Wrapper>
  ));
