import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Cell from '../Cell';
import Row from './Row';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('Row', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['TableHead.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Row width={400}>
        <Cell width={400} height={300} backgroundColor="lightblue">
          hi
        </Cell>
        <Cell width={400} height={300} backgroundColor="lightblue">
          hi
        </Cell>
        <Cell width={400} height={300} backgroundColor="lightblue">
          hi
        </Cell>
      </Row>
    </Wrapper>
  ));
