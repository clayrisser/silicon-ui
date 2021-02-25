import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Input from './Input';
import Wrapper from '../../../storybook/Wrapper';
import docs from './docs';
import storiesOf from '../../../storybook/storiesOf';
import withThemeProvider from '../../../storybook/withThemeProvider';

export const InputStoryWithKnobs: FC = () => (
  <Wrapper>
    <Input
      sx={{ border: text('border', '1px solid black') }}
      placeholder="Enter a value"
    />
  </Wrapper>
);

storiesOf('Beta/Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => <InputStoryWithKnobs />);
