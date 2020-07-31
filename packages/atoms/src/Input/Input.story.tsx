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
        type={text('type', 'text')}
        backgroundColor={select(
          'backgroundColor',
          ['primary', 'secondary', '#ADFF2F', '#E5FFCC', '#CCFFE5'],
          ''
        )}
        disabled={boolean('disabled', false)}
        maxLength={number('maxLength', 10)}
        minLength={number('minLength', 0)}
        value={text('value', 'text')}
        color={text('color', 'text')}
        borderWidth={text('borderWidth', '2px')}
        width={text('width', '80%')}
        ml={0}
        pl={0}
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
