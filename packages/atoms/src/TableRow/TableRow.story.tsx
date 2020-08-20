import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import TableRow from './TableRow';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('TableRow', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['TableHead.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <TableRow />
    </Wrapper>
  ));
