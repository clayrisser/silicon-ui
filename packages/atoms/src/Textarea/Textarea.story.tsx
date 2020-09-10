import React from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
  number,
  color
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Textarea from './Textarea';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';
import docs from './docs';

storiesOf('Textarea', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Textarea
        onPress={action('onPress')}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Type here')}
        rows={text('rows', '5')}
        cols={text('cols', '50')}
        rowSpan={number('rowSpan', 5)}
        bordered={boolean('bordered', true)}
        underline={boolean('bordered', false)}
        backgroundColor={text('background-color', 'inverseText')}
        borderRadius={number('borderRadius', 0)}
        borderColor={color('borderColor', 'rgb(156, 152, 152)')}
        borderWidth={number('borderWidth', 2)}
        borderStyle={text('borderStyle', 'solid')}
        borderBottomWidth={number('borderBottomWidth', 1)}
        borderBottomColor={color('borderBottomColor', '')}
        borderBottomLeftRadius={number('borderLeftRadius', 0)}
        borderBottomRightRadius={number('borderRightRadius', 0)}
        borderLeftWidth={number('borderLeftWidth', 1)}
        borderLeftColor={color('borderLeftColor', '')}
        borderRightWidth={number('borderRightWidth', 1)}
        borderRightColor={color('borderRightColor', '')}
        borderTopWidth={number('borderTopWidth', 1)}
        borderTopLeftRadius={number('borderTopLeftRadius', 0)}
        borderTopRightRadius={number('borderTopRightRadius', 0)}
        borderTopColor={color('borderTopColor', '')}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'A'
        )}
      />
    </Wrapper>
  ));
