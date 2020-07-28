import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Datepicker from './Datepicker';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Input.docs.mdx';

storiesOf('Datepicker', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Datepicker
        backgroundColor={text('backgroundColor', '#FFFFFF00')}
        color={text('color', 'text')}
        ml={0}
        pl={0}
        type="date"
        onPress={action('onPress')}
      />
    </Wrapper>
  ));
