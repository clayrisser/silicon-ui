import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Table from './Table';
import TableRow from '../TableRow';
import TableData from '../TableData';
import { StyleSheet, View } from 'react-native';

import { Rows } from 'react-native-table-component';

import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Table.docs.mdx';

const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
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
      <Table style={{ backgroundColor: '#fff', top: 100 }}>
        <TableRow
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableData data={tableData} textStyle={styles.text} />
      </Table>
    </Wrapper>
  ));

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#fff' },
  text: { margin: 6, backgroundColor: '#fff' }
});
