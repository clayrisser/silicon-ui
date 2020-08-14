import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Checkbox.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Checkbox
        onPress={action('onPress')}
        disabled={boolean('disabled', false)}
        value={text('value', '')}
        checked={boolean('checked', false)}
      />
    </Wrapper>
  ));
