import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Item from './Item';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Item.docs.mdx';

storiesOf('Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Item.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Item />
    </Wrapper>
  ));
