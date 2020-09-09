import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Table from './Table';
import TableCell from '../TableCell';
import TableRow from '../TableRow';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['TableHead.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Table width="100%">
        <TableRow width="100%" resizable>
          <TableCell width="50%" height={300} backgroundColor="lightblue">
            One
          </TableCell>
          <TableCell width="30%" height={300} backgroundColor="lightblue">
            Two
          </TableCell>
          <TableCell height={300} backgroundColor="lightblue">
            Three
          </TableCell>
        </TableRow>
        <TableRow width="100%" resizable>
          <TableCell width="50%" height={300} backgroundColor="lightblue">
            Four
          </TableCell>
          <TableCell width="30%" height={300} backgroundColor="lightblue">
            Five
          </TableCell>
          <TableCell height={300} backgroundColor="lightblue">
            Six
          </TableCell>
        </TableRow>
      </Table>
    </Wrapper>
  ));
