import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Box from './Box';
import Wrapper from '../../../storybook/Wrapper';
import docs from './docs';
import storiesOf from '../../../storybook/storiesOf';
import withThemeProvider from '../../../storybook/withThemeProvider';

export const BoxStory: FC = () => {
  return (
    <Wrapper>
      <Box
        onPull={action('onPull')}
        sx={{ backgroundColor: text('backgroundColor', 'background') }}
        onFocus={action('onFocus')}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'AA'
        )}
      >
        {text('children', 'data')}
      </Box>
    </Wrapper>
  );
};

storiesOf('Beta/Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => <BoxStory />);
