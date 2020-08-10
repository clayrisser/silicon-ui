import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ResizableTable from './ResizableTable';
import ResizableColumn from '../ResizableColumn';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('ResizableTable', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Checkbox.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <ResizableTable />
    </Wrapper>
  ));
