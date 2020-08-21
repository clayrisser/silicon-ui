import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { StyleSheet } from 'react-native';
import Table from './Table';
import TableRow from '../TableRow';
import TableData from '../TableData';

// import { Rows } from 'react-native-table-component';

import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Table.docs.mdx';

const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];

// const tableData = [
//   { id: '256', name: 'kiran', test: 'test', etc: 'etc' },
//   { id: '256', name: 'kiran', test: 'test', etc: 'etc' },
//   { id: '256', name: 'kiran', test: 'test', etc: 'etc' }
// ];
const tableData = [
  ['1', '2', '3', '4'],
  ['a', 'b', 'c', 'd'],
  ['1', '2', '3', '456'],
  ['a', 'b', 'c', 'd']
];

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Table.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Table
        backgroundColor={select(
          'backgroundColor',
          ['primary', 'secondary', '#C0C0C0', '#A9A9A9'],
          '#A9A9A9'
        )}
        // borderRadius={number('borderRadius', 0)}
        // height={200}
        // width={200}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'A'
        )}
      >
        <TableRow
          data={tableHead}
          thStyles={{ border: '1px solid #dddddd', padding: '8px' }}
        />
        <TableData
          data={tableData}
          tdStyles={{ border: '1px solid #dddddd', padding: '8px' }}
        />
      </Table>
    </Wrapper>
  ));
