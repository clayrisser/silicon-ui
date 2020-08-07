import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  number,
  select,
  boolean,
  array
} from '@storybook/addon-knobs';
import Button from './Button';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
import { marginTop } from 'styled-system';
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
        active={boolean('active', false)}
        backgroundColor={select('backgroundColor', ['black', 'blue'], 'black')}
        padding={number('padding', 2)}
        paddingTop={number('paddingTop', 0)}
        paddingLeft={number('padding-left', 0)}
        paddingRight={number('padding-right', 0)}
        paddingBottom={number('padding-bottom', 0)}
        margin={number('margin', 0)}
        marginRight={number('margin-right', 0)}
        marginLeft={number('margin-left', 0)}
        marginTop={number('marginTop', 0)}
        marginBottom={number('marginBottom', 0)}
        value={text('value', '')}
        name={text('name', '')}
        type={text('type', '')}
        className={text('type', '')}
        borderRadius={number('borderRadius', 2)}
        onFocus={action('onFocus')}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        id={text('id', '')}
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
