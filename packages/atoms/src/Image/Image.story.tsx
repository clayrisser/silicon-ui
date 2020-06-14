import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
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
      <Image source={austinJpg} />
    </Wrapper>
  ));
