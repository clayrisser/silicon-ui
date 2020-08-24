import React from 'react';
import { withKnobs, text, color } from '@storybook/addon-knobs';
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
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Icon
        color={color('color', '')}
        name={text('iconName', 'rocket')}
        // fontFamily={text('font-family', 'Arial, Helvetica, sans-serif')}
      />
    </Wrapper>
  ));
