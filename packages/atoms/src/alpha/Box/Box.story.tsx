import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { invert } from '@theme-ui/color';
import { useThemeUI } from 'theme-ui';
import { withKnobs, text, number, color } from '@storybook/addon-knobs';
import Box from './Box';
import Wrapper from '../../../storybook/Wrapper';
import docs from './docs';
import storiesOf from '../../../storybook/storiesOf';
import useThemeLookup from '../../hooks/useThemeLookup';
import withThemeProvider from '../../../storybook/withThemeProvider';

export const BoxStory: FC = () => {
  const themeLookup = useThemeLookup();
  const { theme } = useThemeUI();
  const backgroundColor = 'primary';
  let textColor = theme.colors?.text || ('text' as string);
  try {
    textColor = invert(themeLookup<string>('backgroundColor', backgroundColor))(
      theme
    );
  } catch (err) {}
  return (
    <Wrapper>
      <Box
        // onPull={action('onPull')}
        backgroundColor={color('backgroundColor', backgroundColor)}
        borderBottomColor={color('border-bottom-color', '')}
        borderBottomLeftRadius={number('border-left-radius', 0)}
        borderBottomRightRadius={number('border-right-radius', 0)}
        borderBottomWidth={number('border-bottom-width', 0)}
        borderColor={color('border-color', '')}
        borderLeftColor={color('border-left-color', '')}
        borderLeftWidth={number('border-left-width', 0)}
        borderRadius={number('borderRadius', 0)}
        borderRightColor={color('border-right-color', '')}
        borderRightWidth={number('border-right-width', 0)}
        borderStyle={text('border-style', 'solid')}
        borderTopColor={color('border-top-color', '')}
        borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        borderTopRightRadius={number('borderTop-RightRadius', 0)}
        borderTopWidth={number('border-top-width', 0)}
        borderWidth={number('border-width', 0)}
        color={color('color', textColor)}
        height={number('height', 200)}
        marginBottom={number('margin-bottom', 0)}
        marginLeft={number('margin-left', 0)}
        marginRight={number('margin-right', 0)}
        marginTop={number('margin-top', 0)}
        maxHeight={number('max-height', 999)}
        minHeight={number('min-height', 0)}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        opacity={number('opacity', 1)}
        padding={number('padding', 0)}
        paddingBottom={number('padding-bottom', 0)}
        paddingLeft={number('padding-left', 0)}
        paddingRight={number('padding-right', 0)}
        paddingTop={number('padding-top', 0)}
        width={number('width', 200)}
        zIndex={number('z-index', 0)}
      >
        {text('children', 'data')}
      </Box>
    </Wrapper>
  );
};

storiesOf('Alpha/Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    docs: { page: docs }
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => <BoxStory />);
