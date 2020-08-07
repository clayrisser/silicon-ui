import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';
import Datepicker from './Datepicker';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
import { paddingBottom } from 'styled-system';

// import docs from './Input.docs.mdx';

storiesOf('Datepicker', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Datepicker
        backgroundColor={text('backgroundColor', '#FFFFFF00')}
        color={text('color', 'text')}
        ml={0}
        pl={0}
        type="date"
        onPress={action('onPress')}
        paddingLeft={number('padding-left', 0)}
        paddingRight={number('padding-right', 0)}
        paddingTop={number('padding-top', 0)}
        paddingBottom={number('padding-Bottom', 0)}
        marginLeft={number('margin-left', 0)}
        marginRight={number('margin-right', 0)}
        marginTop={number('margin-top', 0)}
        borderRadius={number('border-radius', 0)}
        marginBottom={number('margin-bottom', 0)}
        max={text('max', '')}
        min={text('min', '')}
        required={boolean('required', false)}
        disabled={boolean('disabled', false)}
        fontFamily={select(
          'font-family',
          ['Times New Roman', 'Arial', 'Helvetica', ' sans-serif'],
          'Times New Roman'
        )}
        fontWeight={text('font-weight', 'bold')}
        fontSize={number('fon-size', 2)}
        lineHeight={text('line-height', '')}
      />
    </Wrapper>
  ));
