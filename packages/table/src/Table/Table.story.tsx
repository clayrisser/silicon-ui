import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Cell from '../Cell';
import Row from '../Row';
import Table from './Table';
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
        <Row width="100%" resizable>
          <Cell width="50%" height={300} backgroundColor="lightblue">
            One
          </Cell>
          <Cell width="30%" height={300} backgroundColor="lightblue">
            Two
          </Cell>
          <Cell height={300} backgroundColor="lightblue">
            Three
          </Cell>
        </Row>
        <Row width="100%" resizable>
          <Cell width="50%" height={300} backgroundColor="lightblue">
            Four
          </Cell>
          <Cell width="30%" height={300} backgroundColor="lightblue">
            Five
          </Cell>
          <Cell height={300} backgroundColor="lightblue">
            Six
          </Cell>
        </Row>
      </Table>
    </Wrapper>
  ));
