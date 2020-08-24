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
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Input.docs.mdx';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Input
        type={select('type', ['text', 'password'], 'text')}
        onTextInput={action('onChange')}
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
        // backgroundColor={text('background-color', 'inverseText')}
        secureTextEntry={boolean('secureTextEntry', false)}
        borderRadius={number('border-radius', 0)}
        borderColor={color('border-color', '#fff')}
        borderWidth={number('border-width', 2)}
        borderStyle={text('border-style', 'solid')}
        borderBottomWidth={number('border-bottom-width', 1)}
        borderBottomColor={color('border-bottom-color', '')}
        borderBottomLeftRadius={number('borderleft-radius', 0)}
        borderBottomRightRadius={number('borderright-radius', 0)}
        borderLeftWidth={number('border-left-width', 1)}
        borderLeftColor={color('border-left-color', '')}
        borderRightWidth={number('border-right-width', 1)}
        borderRightColor={color('border-right-color', '')}
        borderTopWidth={number('border-top-width', 1)}
        borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        borderTopRightRadius={number('borderTop-RightRadius', 0)}
        borderTopColor={color('border-top-color', '')}
        onFocus={action('onFocus')}
        disabled={boolean('disabled', false)}
        // maxLength={text('maxLength', '')}
        minLength={text('minLength', '')}
        required={boolean('required', false)}
        padding={text('padding', '0')}
        margin={text('margin', '0')}
        label={text('inpsutLabel', 'input')}
        id={text('inputId', '')}
        width={text('width', '50%')}
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
