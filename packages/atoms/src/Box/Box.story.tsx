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
        backgroundColor={text('backgroundColor', 'blue')}
        //    borderRadius={number('borderRadius', 0)}
        borderColor={text('border-color', '')}
        borderWidth={number('border-width', 2)}
        borderStyle={text('border-style', 'solid')}
        borderBottomWidth={number('border-bottom-width', 1)}
        borderBottomColor={text('border-bottom-color', '')}
        borderBottomLeftRadius={number('border-left-radius', 0)}
        borderBottomRightRadius={number('border-right-radius', 0)}
        borderLeftWidth={number('border-left-width', 1)}
        borderLeftColor={text('border-left-color', '')}
        borderRightWidth={number('border-right-width', 1)}
        borderRightColor={text('border-right-color', '')}
        borderTopWidth={number('border-top-width', 1)}
        borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        borderTopRightRadius={number('borderTop-RightRadius', 0)}
        borderTopColor={text('border-top-color', '')}
        height={number('height', 200)}
        maxHeight={number('max-height', 400)}
        minHeight={number('min-height', 100)}
        marginTop={number('margin-top', 2)}
        marginBottom={number('margin-bottom', 0)}
        marginRight={number('margin-right', 0)}
        marginLeft={number('margin-left', 2)}
        width={number('width', 200)}
        padding={number('padding', 2)}
        paddingTop={number('padding-top', 0)}
        paddingBottom={number('padding-bottom', 0)}
        paddingRight={number('padding-right', 2)}
        paddingLeft={number('padding-left', 2)}
        zIndex={number('z-index', 0)}
        opacity={number('opacity', 1)}
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
