import React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import Box from './Box';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Button.docs.mdx';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Box
        backgroundColor={text('backgroundColor', 'secondary')}
        borderRadius={number('borderRadius', 0)}
        height={200}
        width={200}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'AA'
        )}
      />
    </Wrapper>
  ));
