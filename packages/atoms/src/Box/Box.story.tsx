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
        backgroundColor={select(
          'backgroundColor',
          ['primary', 'secondary'],
          'primary'
        )}
        color={text('color', '')}
        borderRadius={number('borderRadius', 0)}
        height={number('height', 200)}
        padding={number('padding', 2)}
        fontWeight={text('font-weight', 'body')}
        margin={number('margin', 2)}
        fontSize={number('font-size', 2)}
        letterSpacing={number('letter-spacing', 1)}
        width={number('width', 200)}
        fontFamily={select(
          'font-family',
          ['Times New Roman', 'Arial', 'Helvetica', ' sans-serif'],
          'Times New Roman'
        )}
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
        {text('label', 'its a Box')}
      </Box>
    </Wrapper>
  ));
