import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
// import { Button, Text, TextInput, View } from 'react-native';
// import { render, fireEvent } from '@testing-library/react';

import Button from '../../src/Button/Button.native';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Button />', () => {
  it('renders correctly', () => {
    // it('handles onClick', () => {
    //   const handleClick = jest.fn();
    //   const { container } = render(<Button onClick={handleClick} />);
    //   fireEvent.click(container.querySelector('q2-btn')!);
    //   expect(handleClick).toHaveBeenCalledTimes(1);

    const handleClick = jest.fn();
    const { getByText } = render(<Button onPress={handleClick} />);
    const button = getByText('click me');
    fireEvent.press(button);
    expect(handleClick).toBe(undefined);
  });
});
