import React from 'react';
// import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color
} from '@storybook/addon-knobs';
import Icon from './Icon';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';
// import docs from './Input.docs.mdx';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['Input.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Icon
        name={text('name', 'icon')}
        ios={text('ios', '')}
        android={text('android', 'search')}
        active={boolean('active', false)}
        color={color('color', 'black')}
        fontSize={number('fontSize', 27)}
        class={text('class', '')}
        type={select(
          'type',
          [
            'AntDesign',
            'Ionicons',
            'Entypo',
            'EvilIcons',
            'Feather',
            'FontAwesome',
            'FontAwesome5',
            'Foundation',
            'MaterialIcons',
            'MaterialCommunityIcons',
            'Octicons',
            'Roboto',
            'rubicon-icon-font',
            'SimpleLineIcons',
            'Zocial'
          ],
          'FontAwesome'
        )}
      />
    </Wrapper>
  ));
