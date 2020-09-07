import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import RadioButton from './RadioButton';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('RadioButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['RadioButton.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <RadioButton
        type="radio"
        checked={boolean('checked', false)}
        onPress={action('onPress')}
        disabled={boolean('disabled', false)}
        name={text('name', ' name' )}
        label={text('label', 'icecream')}
      />
    </Wrapper>
  ));
