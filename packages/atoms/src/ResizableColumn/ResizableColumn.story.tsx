import React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import ResizableCell from './/ResizableCell';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
import Box from '../Box/Box';
import { relative } from 'path';
import { View } from 'react-native';
// import docs from './Button.docs.mdx';

storiesOf('ResizableCell', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <ResizableCell />
        {/* <ResizableCell /> */}
      </View>
    </Wrapper>
  ));
