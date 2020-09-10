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
import Input from './Input';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';
import docs from './docs';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Input
        type={select('type', ['text', 'password'], 'text')}
        onChangeText={action('onChange')}
        keyboardType={select(
          'keyboardType',
          [
            'url',
            'numeric',
            'default',
            'email-address',
            'phone-pad',
            'number-pad',
            'decimal-pad',
            'visible-password',
            'ascii-capable',
            'numbers-and-punctuation',
            'name-phone-pad',
            'twitter',
            'web-search'
          ],
          'default'
        )}
        backgroundColor={text('background-color', 'inverseText')}
        secureTextEntry={boolean('secureTextEntry', false)}
        borderRadius={number('borderRadius', 0)}
        borderColor={color('borderColor', '#fff')}
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
        onFocus={action('onFocus')}
        disabled={boolean('disabled', false)}
        // maxLength={text('maxLength', '')}
        minLength={text('minLength', '')}
        required={boolean('required', false)}
        padding={text('padding', '0')}
        margin={text('margin', '0')}
        label={text('inputLabel', 'input')}
        id={text('inputId', '')}
        // width={text('width', '50%')}
        placeholder={text('placeholder', 'user name')}
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
