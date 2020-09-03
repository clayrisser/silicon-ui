import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { render, fireEvent } from '@testing-library/react-native';

import renderer, { act, create } from 'react-test-renderer';
import Checkbox from '../../src/Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Checkbox withProps /> ', () => {
  it('renders with all props correctly', () => {
    const type = 'default';
    const disabled = false;
    const checked = false;
    const tree = renderer
      .create(<Checkbox type={type} disabled={disabled} checked={checked} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Checkbox with events />', () => {
  it('renders with Event correctly', () => {
    const onPress = jest.fn();

    let component: any;
    act(() => {
      component = create(<Checkbox onPress={onPress} />);
    });
    const rootInstance: any = component.root;
    const checkbox = rootInstance.findAllByType(Checkbox);
    expect(checkbox.length).toBe(1);
    expect(checkbox[0].props.onPress()).toBe(undefined);
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
