import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
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
        padding={number('padding', 1)}
        margin={number('margin', 1)}
        fontSize={number('font-size', 2)}
        textAlign={text('text-align', 'center')}
        opacity={number('opacity', 1)}
        letterSpacing={number('letter-spacing', 0)}
        lineHeight={number('line-height', 2)}
        fontFamily={text('font-family', '')}
      >
        {text('children', 'Hello, world!')}
      </Text>
    </Wrapper>
  ));
