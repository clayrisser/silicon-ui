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
        secureTextEntry={boolean('secureTextEntry', false)}
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
        // borderWidth={text('borderWidth', '7')}
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
