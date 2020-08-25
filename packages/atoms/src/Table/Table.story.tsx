import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Table from './Table';
import TableCell from '../TableCell';
import TableRow from '../TableRow';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['TableHead.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Table>
        <TableRow width={400}>
          <TableCell width={400} height={300} backgroundColor="lightblue">
            hi
          </TableCell>
          <TableCell width={400} height={300} backgroundColor="lightblue">
            hi
          </TableCell>
          <TableCell width={400} height={300} backgroundColor="lightblue">
            hi
          </TableCell>
        </TableRow>
      </Table>
    </Wrapper>
  ));
