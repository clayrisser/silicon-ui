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

describe('<DatePicker with props/>', () => {
  const value = '';
  const disabled = false;
  const maxDate = 2020 - 12 - 12;
  const minDate = 2020 - 10 - 12;
  const backgroundColor = 'inverseText';
  const borderRadius = 0;
  const borderWidth = 0;
  const fontFamily = 'body';
  const type = 'date';
  const fontSize = 0;
  const fontWeight = 'body';
  const lineHeight = 'body';
  const paddingBottom = 0;
  const paddingLeft = 0;
  const paddingRight = 0;
  const paddingTop = 0;
  const width = '100%';
  it('renders with  all props correctly', () => {
    const tree = renderer
      .create(
        <DatePicker
          value={value}
          disabled={disabled}
          maximumDate={maxDate}
          minimumDate={minDate}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          borderWidth={borderWidth}
          fontFamily={fontFamily}
          type={type}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          paddingBottom={paddingBottom}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          padding={paddingTop}
          width={width}
        />
      )
      .toJSON();
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
