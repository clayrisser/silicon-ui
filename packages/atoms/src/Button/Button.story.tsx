import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  number,
  select,
  boolean
} from '@storybook/addon-knobs';
import Button from './Button';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

// import docs from './Button.docs.mdx';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Button
        disabled={boolean('disabled', false)}
        backgroundColor={select(
          'backgroundColor',
          ['primary', 'secondary'],
          'primary'
        )}
        padding={number('padding', 2)}
        margin={number('margin', 0)}
        value={text('value', '')}
        name={text('name', '')}
        type={text('type', '')}
        className={text('type', '')}
        borderRadius={number('borderRadius', 2)}
        onFocus={action('onFocus')}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'AA'
        )}
      >
        {text('title', 'click me')}
      </Button>
    </Wrapper>
  ));
