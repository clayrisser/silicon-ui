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
        color={text('color', 'black')}
        borderRadius={number('borderRadius', 0)}
        height={number('height', 50)}
        padding={number('padding', 25)}
        width={number('width', 50)}
        fontWeight={text('font-weight', 'bold')}
        paddingLeft={number('padding-left', 0)}
        paddingRight={number('padding-right', 0)}
        paddingTop={number('padding-top', 0)}
        paddingBottom={number('padding-bottom', 0)}
        margin={number('margin', 0)}
        marginBottom={number('margin-bottom', 0)}
        marginLeft={number('margin-left', 0)}
        marginRight={number('margin-right', 0)}
        marginTop={number('margin-top', 0)}
        fontSize={number('font-size', 4)}
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
          'AA'
        )}
      >
        {text('label', 'hello boox')}
      </Box>
    </Wrapper>
  ));
