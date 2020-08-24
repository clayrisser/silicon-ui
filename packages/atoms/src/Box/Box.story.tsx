import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, select, color } from '@storybook/addon-knobs';
import Box from './Box';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

// import docs from './Button.docs.mdx';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Box
        backgroundColor={color('backgroundColor', 'primary')}
        borderRightWidth={number('borderRightWidth', 0)}
        borderLeftWidth={number('borderLeftWidth', 0)}
        borderBottomWidth={number('borderBottomWidth', 0)}
        borderTopWidth={number('borderTopWidth', 0)}
        borderLeftColor={color('borderLeftColor', '')}
        borderRightColor={color('borderRightColor', '')}
        borderTopColor={color('borderTopColor', '')}
        borderBottomColor={color('borderBottomColor', '')}
        borderTopLeftRadius={number('borderTopLeftRadius', 0)}
        borderTopRightRadius={number('borderTopRightRadius', 0)}
        borderBottomLeftRadius={number('borderLeftRadius', 0)}
        borderBottomRightRadius={number('borderRightRadius', 0)}
        borderColor={color('borderColor', '')}
        // borderRadius={number('borderRadius', 0)}
        borderStyle={text('borderStyle', 'solid')}
        //   borderWidth={number('border-width', 0)}
        height={number('height', 200)}
        marginBottom={number('marginBottom', 0)}
        marginLeft={number('marginLeft', 2)}
        marginRight={number('marginRight', 0)}
        marginTop={number('marginTop', 2)}
        maxHeight={number('maxHeight', 400)}
        minHeight={number('minHeight', 100)}
        onDrag={action('onDrag')}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        opacity={number('opacity', 1)}
        padding={number('padding', 2)}
        paddingBottom={number('paddingBottom', 0)}
        paddingLeft={number('paddingLeft', 2)}
        paddingRight={number('paddingRight', 2)}
        paddingTop={number('paddingTop', 0)}
        width={number('width', 200)}
        zIndex={number('zIndex', 0)}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'A'
        )}
      >
        {text('children', 'data')}
      </Box>
    </Wrapper>
  ));
