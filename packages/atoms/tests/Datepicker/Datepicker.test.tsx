import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
// import { render, fireEvent } from '@testing-library/react-native';

import DatePicker from '../../src/Datepicker';

describe('<DatePicker />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DatePicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// describe('<Datepicker />', () => {
//   it('renders correctly', () => {
//     // it('handles onClick', () => {
//     //   const handleClick = jest.fn();
//     //   const { container } = render(<Button onClick={handleClick} />);
//     //   fireEvent.click(container.querySelector('q2-btn')!);
//     //   expect(handleClick).toHaveBeenCalledTimes(1);

//     const handlePress = jest.fn();
//     const { getByDisplayValue } = render(<DatePicker onPress={handlePress} />);
//     const element = getByDisplayValue('click me');
//     fireEvent.press(element);
//     expect(handlePress).toBe(undefined);
//   });
// });

// describe('<Datepicker onPress />', () => {
//   it('handles onPress', () => {
//     // const handleChange = jest.fn();
//     // const tree = render(<HTMLDatePicker onPress={handleChange} />);
//     // fireEvent.press(tree.querySelector('HTMLDatepicker')!);
//     // expect(handlePress).toHaveBeenCalledTimes(1);

//     const handlePress = jest.fn();
//     const { getByPlaceholderText } = render(
//       <DatePicker onPress={handlePress} />
//     );

//     fireEvent(getByPlaceholderText('press'), 'onChangeText', 'ab');
//     expect(handlePress).toHaveBeenCalledWith('ab');
//   });
// });
