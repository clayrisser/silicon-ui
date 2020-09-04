import React from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import RadioButton from './RadioButton';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('RadioButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['RadioButton.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <RadioButton type="radio" checked={boolean('checked', false)} />
    </Wrapper>
  ));
