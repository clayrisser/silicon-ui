import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  color
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
        backgroundColor={color('backgroundColor', '#FFFFFF')}
        type="date"
        onPress={action('onPress')}
        // border={text('border', '1px solid')}
        borderWidth={number('borderWidth', 1)}
        padding={text('padding', '2')}
        margin={text('margin', '2')}
        borderRadius={number('borderRadius', 0)}
        // marginBottom={number('margin-bottom', 0)}
        max={text('max', '2021-12-08')}
        min={text('min', '2020-07-18')}
        value={text('value', '')}
        // required={boolean('required', false)}
        disabled={boolean('disabled', false)}
        width={text('width', '')}
        fontFamily={text('fontFamily', 'Times New Roman')}
        fontWeight={text('fontWeight', 'normal')}
        fontSize={number('fontSize', 2)}
        lineHeight={text('lineHeight', '')}
      />
    </Wrapper>
  ));
