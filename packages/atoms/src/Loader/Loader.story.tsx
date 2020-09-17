import React, { FC } from 'react';
import { withKnobs, color } from '@storybook/addon-knobs';
import Loader from './Loader';
import Wrapper from '../../storybook/Wrapper';
import docs from './docs';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

export const LoaderStoryWithKnobs: FC = () => (
  <Wrapper>
    <Loader color={color('color', 'blue')}></Loader>
  </Wrapper>
);

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
  })
  .add('with knobs', () => <LoaderStoryWithKnobs />);
