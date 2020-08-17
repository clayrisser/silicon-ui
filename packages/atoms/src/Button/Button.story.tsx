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
        backgroundColor={text('backgroundColor', 'primary')}
        padding={number('padding', 2)}
        margin={number('margin', 0)}
        name={text('name', 'button')}
        type={text('type', 'first')}
        value={text('value', 'button')}
        borderRadius={number('borderRadius', 2)}
        borderColor={text('border-color', '')}
        borderWidth={number('border-width', 2)}
        borderStyle={text('border-style', 'solid')}
        borderBottomWidth={number('border-bottom-width', 1)}
        borderBottomColor={text('border-bottom-color', '')}
        borderBottomLeftRadius={number('borderleft-radius', 0)}
        borderBottomRightRadius={number('borderright-radius', 0)}
        borderLeftWidth={number('border-left-width', 1)}
        borderLeftColor={text('border-left-color', '')}
        borderRightWidth={number('border-right-width', 1)}
        borderRightColor={text('border-right-color', '')}
        borderTopWidth={number('border-top-width', 1)}
        borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        borderTopRightRadius={number('borderTop-RightRadius', 0)}
        borderTopColor={text('border-top-color', '')}
        disabled={boolean('disabled', false)}
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
        {text('children', 'click me')}
      </Button>
    </Wrapper>
  ));
