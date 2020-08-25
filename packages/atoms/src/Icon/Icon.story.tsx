import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Icon from './Icon';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Image.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Icon />
    </Wrapper>
  ));
