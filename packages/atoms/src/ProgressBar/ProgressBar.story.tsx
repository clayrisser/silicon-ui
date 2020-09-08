import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, date } from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';
// import docs from './Input.docs.mdx';

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <ProgressBar
        value={text('value', '40')}
        max={text('max', '100')}
        id={text('id', 'tracker')}
        progress={number('progress', 30)}
      />
    </Wrapper>
  ));
