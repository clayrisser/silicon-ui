import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { render, fireEvent } from '@testing-library/react-native';

import renderer from 'react-test-renderer';
import Checkbox from '../../src/Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Checkbox withProps /> ', () => {
  it('renders with all props correctly', () => {
    const label = 'Option';
    const value = 'Option';
    const type = 'default';
    const disabled = false;
    const checked = false;
    const tree = renderer
      .create(
        <Checkbox
          label={label}
          value={value}
          type={type}
          disabled={disabled}
          checked={checked}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe('<Checkbox onChange />', () => {
//   it('handles onChange', () => {
//     // const handleChange = jest.fn();
//     // const tree = render(<Checkbox onPress={handleChange} />);
//     // fireEvent.press(tree.querySelector('HTMLCheckbox')!);
//     // expect(handleChange).toHaveBeenCalledTimes(1);

//     const handleChange = jest.fn();
//     const { getByPlaceholderText } = render(
//       // MyComponent renders TextInput which has a placeholder 'Enter details'
//       // and with `onChangeText` bound to handleChangeText
//       <Checkbox onPress={handleChange} />
//     );

//     fireEvent(getByPlaceholderText('change'), 'onChangeText', 'ab');
//     expect(handleChange).toHaveBeenCalledWith('ab');
//   });
// });
