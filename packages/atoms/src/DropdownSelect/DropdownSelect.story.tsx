import React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';

import DropdownSelect from './DropdownSelect';
import DropdownOption from '../DropdownOption/DropdownOption';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
import { Alert } from 'react-native';

storiesOf('DropdownSelect', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <DropdownSelect
        backgroundColor={text('backgroundColor', 'secondary')}
        // borderRadius={number('borderRadius', 0)}
        // height={200}
        // width={200}
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
        {/* <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
        <Picker.Item label="Net Banking" value="key4" /> */}
      </DropdownSelect>
    </Wrapper>
  ));
