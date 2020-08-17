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
        backgroundColor={text('backgroundColor', '#FFFFFF')}
        type="date"
        onPress={action('onPress')}
        onSelect={action('onSelect')}
        onChange={action('onChange')}
        padding={text('padding', '2')}
        margin={text('margin', '2')}
        borderRadius={number('border-radius', 0)}
        marginBottom={number('margin-bottom', 0)}
        max={text('max', '')}
        min={text('min', '')}
        required={boolean('required', false)}
        disabled={boolean('disabled', false)}
        width={text('width', '70%')}
        fontFamily={text('font-family', 'Times New Roman')}
        fontWeight={text('font-weight', 'normal')}
        fontSize={number('fon-size', 2)}
        lineHeight={text('line-height', '')}
      />
    </Wrapper>
  ));
