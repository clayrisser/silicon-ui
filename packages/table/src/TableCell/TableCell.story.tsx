import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';
import TableCell from './TableCell';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('TableCell', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['TableCell.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <TableCell height={400} backgroundColor="red" width={400} minWidth={200}>
        {text('children', 'data')}
      </TableCell>
    </Wrapper>
  ));
