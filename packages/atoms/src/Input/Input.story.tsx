import React from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
  number
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
        backgroundColor={text('background-color', '')}
        secureTextEntry={boolean('secureTextEntry', false)}
        borderRadius={number('border-radius', 0)}
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
        onFocus={action('onFocus')}
        disabled={boolean('disabled', false)}
        // maxLength={text('maxLength', '')}
        minLength={text('minLength', '')}
        required={boolean('required', false)}
        padding={text('padding', '2')}
        margin={text('margin', '2')}
        label={text('input-label', 'input')}
        id={text('input-id', '')}
        width={text('width', '70%')}
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
