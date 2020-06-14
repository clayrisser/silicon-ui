import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Input from './Input';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Button.docs.mdx';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Input
        backgroundColor={text('backgroundColor', '#FFFFFF00')}
        color={text('color', 'text')}
        ml={0}
        pl={0}
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
