import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Item from './Item';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';
import docs from './docs';

storiesOf('Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Item.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Item />
    </Wrapper>
  ));
