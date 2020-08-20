import React from 'react';
import {
  withKnobs,
  text,
  number,
  select,
  boolean,
  action
} from '@storybook/addon-knobs';
// import { Container, Header, Content, Form, Item, Picker } from 'native-base';

import DropdownSelect from './DropdownSelect';
import DropdownOption from '../DropdownOption/DropdownOption';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
import { string } from 'prop-types';

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
        backgroundColor={text('backgroundColor', 'primary')}
        borderRadius={number('border-radius', 0)}
        borderColor={text('border-color', '')}
        borderWidth={number('border-width', 2)}
        borderStyle={text('border-style', 'solid')}
        borderBottomWidth={number('border-bottom-width', 1)}
        borderBottomColor={text('border-bottom-color', '')}
        borderBottomLeftRadius={number('border-left-radius', 0)}
        borderBottomRightRadius={number('border-right-radius', 0)}
        borderLeftWidth={number('border-left-width', 1)}
        borderLeftColor={text('border-left-color', '')}
        borderRightWidth={number('border-right-width', 1)}
        borderRightColor={text('border-right-color', '')}
        borderTopWidth={number('border-top-width', 1)}
        borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        borderTopRightRadius={number('borderTop-RightRadius', 0)}
        borderTopColor={text('border-top-color', '')}
        disabled={boolean('disabled', false)}
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
        fontFamily={text('font-family', 'Times New Roman')}
        fontWeight={text('font-weight', 'bold')}
        fontSize={number('fon-size', 2)}
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
