import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
      <Text color={text('color', 'text')}>
        {text('children', 'Hello, world!')}
      </Text>
    </Wrapper>
  ));
