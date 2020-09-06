import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { invert } from '@theme-ui/color';
import { useThemeUI, css } from 'theme-ui';
import { withKnobs, text, number, select, color } from '@storybook/addon-knobs';
import Box from './Box';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

export const BoxStory: FC = () => {
  const { theme } = useThemeUI();
  const backgroundColor = 'primary';
  let textColor = theme.colors?.text || ('text' as string);
  try {
    textColor = invert(
      (css({ backgroundColor })(theme) as any).backgroundColor
    )(theme);
  } catch (err) {}
  return (
    <Wrapper>
      <Box
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
        marginLeft={number('margin-left', 2)}
        marginRight={number('margin-right', 0)}
        marginTop={number('margin-top', 2)}
        maxHeight={number('max-height', 400)}
        minHeight={number('min-height', 100)}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        onPull={action('onPull')}
        opacity={number('opacity', 1)}
        padding={number('padding', 2)}
        paddingBottom={number('padding-bottom', 0)}
        paddingLeft={number('padding-left', 2)}
        paddingRight={number('padding-right', 2)}
        paddingTop={number('padding-top', 0)}
        width={number('width', 200)}
        zIndex={number('z-index', 0)}
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
  );
};

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => <BoxStory />);
