import React from 'react';
// import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color
} from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';
import docs from './docs';

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <ProgressBar
        value={text('value', '40')}
        max={text('max', '100')}
        id={text('id', 'tracker')}
        progress={number('progress', 0.2)}
        styleAttr={text('styleAttr', 'Horizontal')}
        animating={boolean('animating', true)}
        color={color('color', '#2196F3')}
        indeterminate={boolean('indeterminate', false)}
        // styleAttr={select(
        //   'keyboardType',
        //   [
        //     'Horizontal',
        //     'Normal',
        //     'Small',
        //     'Large',
        //     'Inverse',
        //     'SmallInverse',
        //     'LargeInverse'
        //   ],
        //   'Normal'
        // )}
      />
    </Wrapper>
  ));
