import React from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
  number
} from '@storybook/addon-knobs';
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
        backgroundColor={select(
          'backgroundColor',
          ['primary', 'secondary', '#ADFF2F', '#E5FFCC', '#CCFFE5'],
          ''
        )}
        disabled={boolean('disabled', false)}
        maxLength={number('maxLength', 10)}
        minLength={number('minLength', 0)}
        required={boolean('required', false)}
        paddingBottom={number('padding-bottom', 0)}
        paddingTop={number('padding-top', 0)}
        paddingLeft={number('padding-left', 0)}
        paddingRight={number('padding-right', 0)}
        label={text('input-label', 'input')}
        color={text('color', 'text')}
        borderWidth={text('borderWidth', '2px')}
        id={text('input-id', '')}
        width={text('width', '70%')}
        ml={0}
        pl={0}
        placeholder={text('placeholder', 'Sample Placeholder')}
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
      />
    </Wrapper>
  ));
