import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Form from '../Form';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Form.docs.mdx';

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Form.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Form method="POST" action="/send" />
    </Wrapper>
  ));
