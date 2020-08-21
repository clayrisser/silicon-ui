import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  number,
  select,
  boolean,
  color
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
        backgroundColor={color('backgroundColor', 'primary')}
        borderRadius={number('border-radius', 0)}
        borderColor={color('border-color', '')}
        borderWidth={number('border-width', 2)}
        borderStyle={text('border-style', 'solid')}
        borderBottomWidth={number('border-bottom-width', 1)}
        // borderBottomColor={text('border-bottom-color', '')}
        // borderBottomLeftRadius={number('border-left-radius', 0)}
        // borderBottomRightRadius={number('border-right-radius', 0)}
        borderLeftWidth={number('border-left-width', 1)}
        // borderLeftColor={text('border-left-color', '')}
        borderRightWidth={number('border-right-width', 1)}
        // borderRightColor={text('border-right-color', '')}
        borderTopWidth={number('border-top-width', 1)}
        // borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        // borderTopRightRadius={number('borderTop-RightRadius', 0)}
        // borderTopColor={text('border-top-color', '')}
        disabled={boolean('disabled', false)}
        // margin={number('margin', 0)}
        marginBottom={number('margin-bottom', 0)}
        marginLeft={number('margin-left', 2)}
        marginRight={number('margin-right', 0)}
        marginTop={number('margin-top', 2)}
        name={text('name', 'button')}
        onFocus={action('onFocus')}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        padding={number('padding', 2)}
        type={text('type', 'submit')}
        value={text('value', 'button')}
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
