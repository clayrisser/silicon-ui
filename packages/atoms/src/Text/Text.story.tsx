import React from 'react';
import { withKnobs, text, number, color } from '@storybook/addon-knobs';
import Text from './Text';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Text
        color={color('color', '')}
        fontWeight={text('fontWeight', 'bold')}
        padding={number('padding', 1)}
        margin={number('margin', 1)}
        fontSize={number('fontSize', 2)}
        textAlign={text('textAlign', 'center')}
        opacity={number('opacity', 1)}
        letterSpacing={number('letterSpacing', 0)}
        paddingTop={number('paddingTop', 2)}
        paddingLeft={number('paddingLeft', 1)}
        paddingBottom={number('paddingBottom', 1)}
        paddingRight={number('paddingRight', 2)}
        marginBottom={number('marginBottom', 0)}
        marginTop={number('marginTop', 0)}
        marginLeft={number('marginLeft', 0)}
        marginRight={number('marginRight', 0)}
        // fontFamily={text('font-family', 'Arial, Helvetica, sans-serif')}
      >
        {text('children', 'Hello, world!')}
      </Text>
    </Wrapper>
  ));
