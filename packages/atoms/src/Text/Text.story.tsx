import React from 'react';
import { withKnobs, text, number, color } from '@storybook/addon-knobs';
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
        color={color('color', '')}
        fontWeight={text('font-weight', 'bold')}
        padding={number('padding', 1)}
        margin={number('margin', 1)}
        fontSize={number('font-size', 2)}
        textAlign={text('text-align', 'center')}
        opacity={number('opacity', 1)}
        letterSpacing={number('letter-spacing', 0)}
        paddingTop={number('padding-top', 2)}
        paddingLeft={number('padding-left', 1)}
        paddingBottom={number('padding-bottom', 1)}
        paddingRight={number('padding-right', 2)}
        marginBottom={number('margin-bottom', 0)}
        marginTop={number('margin-top', 0)}
        marginLeft={number('margin-left', 0)}
        marginRight={number('margin-right', 0)}
        // fontFamily={text('font-family', 'Arial, Helvetica, sans-serif')}
      >
        {text('children', 'Hello, world!')}
      </Text>
    </Wrapper>
  ));
