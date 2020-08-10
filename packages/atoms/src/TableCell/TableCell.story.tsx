import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import TableCell from './TableCell';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('TableCell', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['TableCell.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <TableCell
        backgroundColor={text('backgroundColor', 'secondary')}
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
        data
      </TableCell>
    </Wrapper>
  ));
