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
        borderRadius={number('borderRadius', 0)}
        height={number('height', 200)}
        padding={number('padding', 2)}
        // fontWeight={text('font-weight', 'body')}
        marginTop={number('margin-top', 2)}
        marginBottom={number('margin-bottom', 0)}
        marginRight={number('margin-right', 0)}
        marginLeft={number('margin-left', 2)}
        // fontSize={number('font-size', 2)}
        // letterSpacing={number('letter-spacing', 1)}
        width={number('width', 200)}
        // fontFamily={select(
        //   'font-family',
        //   ['Times New Roman', 'Arial', 'Helvetica', ' sans-serif'],
        //   'Times New Roman'
        // )}
        paddingTop={number('padding-top', 0)}
        paddingBottom={number('padding-bottom', 0)}
        paddingRight={number('padding-right', 2)}
        paddingLeft={number('padding-left', 2)}
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
      />
    </Wrapper>
  ));
