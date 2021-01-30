import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import RadioButton from './RadioButton';
import Wrapper from '../../../storybook/Wrapper';
import storiesOf from '../../../storybook/storiesOf';
import withThemeProvider from '../../../storybook/withThemeProvider';
import docs from './docs';

storiesOf('Alpha/RadioButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['RadioButton.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <RadioButton
        onPress={action('onPress')}
        type="radio"
        name={text('name', 'gender')}
        value={text('value', 'male')}
        checked={boolean('checked', false)}
        selected={boolean('selected', false)}
        // disabled={boolean('disabled', false)}
      />
    </Wrapper>
  ));
