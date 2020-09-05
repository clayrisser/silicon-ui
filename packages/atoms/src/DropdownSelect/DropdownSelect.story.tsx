import React from 'react';
import {
  withKnobs,
  text,
  number,
  select,
  boolean,
  color
} from '@storybook/addon-knobs';
// import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import { action } from '@storybook/addon-actions';
import DropdownSelect from './DropdownSelect';
import DropdownOption from '../DropdownOption/DropdownOption';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemeProvider from '../../storybook/withThemeProvider';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <DropdownSelect
        backgroundColor={color('backgroundColor', 'reverseText')}
        borderBottomColor={color('borderBottomColor', '')}
        borderBottomLeftRadius={number('borderLeftRadius', 0)}
        borderBottomRightRadius={number('borderRightRadius', 0)}
        borderBottomWidth={number('borderBottomWidth', 1)}
        borderColor={color('borderColor', '')}
        borderLeftColor={color('borderLeftColor', '')}
        borderLeftWidth={number('borderLeftWidth', 1)}
        borderRadius={number('borderRadius', 0)}
        borderRightColor={color('borderRightColor', '')}
        borderRightWidth={number('borderRightWidth', 1)}
        borderStyle={text('borderStyle', 'solid')}
        borderTopColor={color('borderTopColor', '')}
        borderTopLeftRadius={number('borderTopLeftRadius', 0)}
        borderTopRightRadius={number('borderTopRightRadius', 0)}
        borderTopWidth={number('borderTopWidth', 1)}
        borderWidth={number('borderWidth', 2)}
        disabled={boolean('disabled', false)}
        fontFamily={text('fontFamily', 'Times New Roman')}
        fontSize={number('fonSize', 2)}
        fontWeight={text('fontWeight', 'bold')}
        label={text('dropdownLabel', 'choose one')}
        lineHeight={text('lineHeight', '')}
        marginBottom={number('marginBottom', 0)}
        marginLeft={number('marginLeft', 2)}
        marginRight={number('marginRight', 0)}
        marginTop={number('marginTop', 2)}
        multiple={boolean('multiple', false)}
        name={text('dropdownName', '')}
        onPress={action('onPress')}
        padding={text('padding', '2')}
        required={boolean('required', false)}
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
        <DropdownOption value="Tesla" label="Tesla">
          Tesla
        </DropdownOption>
        <DropdownOption value="Volvo" label="Volvo" disabled>
          Volvo
        </DropdownOption>
        <DropdownOption value="Saab" label="Saab">
          Saab
        </DropdownOption>
        <DropdownOption value="Mercedes" label="Mercedes">
          Mercedes
        </DropdownOption>
        <DropdownOption value="Audi" label="Audi">
          Audi
        </DropdownOption>
      </DropdownSelect>
    </Wrapper>
  ));
