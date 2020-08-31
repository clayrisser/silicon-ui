import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  date
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
        borderWidth={number('borderWidth', 1)}
        padding={text('padding', '2')}
        margin={text('margin', '2')}
        borderRadius={number('borderRadius', 0)}
        max={text('max', '2021-12-08')}
        min={text('min', '2020-07-18')}
        maximumDate={date('maximumDate', new Date('Oct 20 2020'))}
        minimumDate={date('minimumDate', new Date('Jan 15 2020'))}
        value={text('value', '')}
        disabled={boolean('disabled', false)}
        width={text('width', '90%')}
        fontFamily={text('fontFamily', 'Times New Roman')}
        fontWeight={text('fontWeight', 'normal')}
        fontSize={number('fontSize', 2)}
        lineHeight={text('lineHeight', '')}
      />
    </Wrapper>
  ));
