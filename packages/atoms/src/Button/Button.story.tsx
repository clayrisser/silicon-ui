import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import Button from './Button';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
// import docs from './Button.docs.mdx';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Button
        onClick={action('onClick')}
        onPress={action('onPress')}
        styled={boolean('styled', false)}
        autoContrast={optionsKnob<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'AA',
          { display: 'inline-radio' }
        )}
      >
        {text('children', 'click me')}
      </Button>
    </Wrapper>
  ));
