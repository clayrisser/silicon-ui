import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Image from './Image';
import Wrapper from '../../storybook/Wrapper';
import austinJpg from './austin.jpg';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Image.docs.mdx';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Image.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Image
        source={text('source', austinJpg)}
        alt={text('alt', 'sample image')}
        width={number('width', 400)}
        height={number('height', 250)}
        onPress={action('onPress')}
      />
    </Wrapper>
  ));
