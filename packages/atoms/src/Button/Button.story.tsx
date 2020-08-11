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
        active={boolean('active', false)}
        backgroundColor={select(
          'backgroundColor',
          ['primary', 'secondary'],
          'primary'
        )}
        padding={text('padding', '2')}
        margin={text('margin', '')}
        value={text('value', '')}
        name={text('name', '')}
        type={text('type', '')}
        className={text('type', '')}
        borderRadius={number('borderRadius', 2)}
        paddingTop={text('padding-top', '')}
        paddingBottom={text('padding-bottom', '')}
        paddingRight={text('padding-right', '')}
        paddingLeft={text('padding-left', '')}
        marginLeft={text('margin-left', '')}
        marginRight={text('margin-right', '')}
        marginTop={text('margin-top', '')}
        marginBottom={text('margin-bottom', '')}
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
