import React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import Text from './Text';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Button.docs.mdx';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Text
        color={text('color', 'text')}
        fontFamily={select(
          'font-family',
          ['Times New Roman', 'Arial', 'Helvetica', ' sans-serif'],
          'Times New Roman'
        )}
        fontWeight={text('font-weight', 'bold')}
        fontSize={number('font-size', 2)}
        lineHeight={text('line-height', '')}
        letterSpacing={number('letter-spacing', 0)}
      >
        {text('children', 'Hello, world!')}
      </Text>
    </Wrapper>
  ));
