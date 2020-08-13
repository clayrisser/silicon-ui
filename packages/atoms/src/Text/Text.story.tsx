import React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import Text from './Text';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

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
        fontWeight={text('font-weight', 'bold')}
        fontSize={number('font-size', 2)}
        opacity={number('opacity', 1)}
        letterSpacing={number('letter-spacing', 0)}
      >
        {text('children', 'Hello, world!')}
      </Text>
    </Wrapper>
  ));
