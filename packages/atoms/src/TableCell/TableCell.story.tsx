import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';
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
        borderColor={text('borderColor', 'primary')}
        backgroundColor="blue"
        height={400}
        width={400}
        borderStyle={select(
          'borderStyle',

          {
            dashed: 'dashed',
            dotted: 'dotted',
            double: 'double',
            groove: 'groove',
            hidden: 'hidden',
            inset: 'inset',
            none: 'none',
            outset: 'outset',
            ridge: 'ridge',
            solid: 'solid'
          },
          'solid'
        )}
        borderWidth={number('borderWidth', 0)}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          // @ts-ignore
          false
        )}
      >
        {text('children', 'data')}
      </TableCell>
    </Wrapper>
  ));
