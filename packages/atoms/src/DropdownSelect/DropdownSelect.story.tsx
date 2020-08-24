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
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <DropdownSelect
        onPress={action('onPress')}
        backgroundColor={color('backgroundColor', 'primary')}
        borderRadius={number('border-radius', 0)}
        borderColor={color('border-color', '')}
        borderWidth={number('border-width', 2)}
        borderStyle={text('border-style', 'solid')}
        borderBottomWidth={number('border-bottom-width', 1)}
        borderBottomColor={color('border-bottom-color', '')}
        borderBottomLeftRadius={number('border-left-radius', 0)}
        borderBottomRightRadius={number('border-right-radius', 0)}
        borderLeftWidth={number('border-left-width', 1)}
        borderLeftColor={color('border-left-color', '')}
        borderRightWidth={number('border-right-width', 1)}
        borderRightColor={color('border-right-color', '')}
        borderTopWidth={number('border-top-width', 1)}
        borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        borderTopRightRadius={number('borderTop-RightRadius', 0)}
        borderTopColor={color('border-top-color', '')}
        disabled={boolean('disabled', false)}
        fontFamily={text('font-family', 'Times New Roman')}
        fontWeight={text('font-weight', 'bold')}
        fontSize={number('fon-size', 2)}
        multiple={boolean('multiple', false)}
        marginBottom={number('margin-bottom', 0)}
        marginLeft={number('margin-left', 2)}
        marginRight={number('margin-right', 0)}
        marginTop={number('margin-top', 2)}
        selectedValue={text('selectedValue', '')}
        padding={text('padding', '2')}
        name={text('dropdown-name', '')}
        required={boolean('required', false)}
        autofocus={boolean('autofocus', false)}
        label={text('dropdown-label', 'choose one')}
        lineHeight={text('line-height', '')}
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
        // selectedValue="Saab"
      >
        <DropdownOption value="Tesla" label="Tesla">
          Tesla
        </DropdownOption>
        <DropdownOption value="Volvo" label="Volvo">
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
