import React, { FC } from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Link from './Link';
import Wrapper from '../../storybook/Wrapper';
import docs from './docs';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

export const LinkStoryWithKnobs: FC = () => (
  <Wrapper>
    <Link
      href={text('href', 'https://www.google.com/')}
      target={select(
        'target',
        ['_self', '_blank', '_parent', '_top'],
        '_blank'
      )}
    >
      {text('children', 'click me')}
    </Link>
  </Wrapper>
);

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
  })
  .add('with knobs', () => <LinkStoryWithKnobs />);
