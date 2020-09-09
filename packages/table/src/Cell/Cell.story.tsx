import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Cell from './Cell';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('Cell', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['Cell.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Cell height={400} backgroundColor="red" width={400} minWidth={200}>
        {text('children', 'data')}
      </Cell>
    </Wrapper>
  ));
