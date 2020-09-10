import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Form from './Form';
import docs from './docs';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';
// import docs from './Form.docs.mdx';

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Form.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Form method="POST" action="/send" />
    </Wrapper>
  ));
