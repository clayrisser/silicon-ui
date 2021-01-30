import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Iframe from './Iframe';
import Wrapper from '../../../storybook/Wrapper';
import storiesOf from '../../../storybook/storiesOf';
import withThemeProvider from '../../../storybook/withThemeProvider';
import docs from './docs';

storiesOf('Alpha/Iframe', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
  })
  .add('with knobs', () => (
    <Wrapper>
      <Iframe
        src={text('src', 'https://www.youtube.com/embed/Ke90Tje7VS0')}
        height={text('height', '300')}
        width={text('width', '400')}
        title={text('title', 'iframe Example')}
      />
    </Wrapper>
  ));
