import React, { FC } from 'react';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';
import Wrapper from '../../storybook/Wrapper';
import docs from './docs';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

export const ButtonStoryWithKnobs: FC = () => (
  <Wrapper>
    <Button
      onFocus={action('onFocus')}
      onPress={action('onPress')}
      onPressIn={action('onPressIn')}
      onPressOut={action('onPressOut')}
    >
      <Text>{text('children', 'click me')}</Text>
    </Button>
  </Wrapper>
);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => <ButtonStoryWithKnobs />);
