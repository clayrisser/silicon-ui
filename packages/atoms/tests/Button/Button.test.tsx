import React from 'react';
import renderer, { act, create } from 'react-test-renderer';

import { render, fireEvent } from '@testing-library/react-native';
// import { Button, Text, TextInput, View } from 'react-native';
// import { render, fireEvent } from '@testing-library/react';

import Button from '../../src/Button/Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Button withProps /> ', () => {
  it('renders with disabled prop', () => {
    const borderRadius = 2;
    const borderWidth = 2;
    const backgroundColor = 'free';
    const fontSize = '';
    const fontWeight = '';
    const fontFamily = '';
    const width = 3;

    const tree = renderer
      .create(
        <Button
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
          borderWidth={borderWidth}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily={fontFamily}
          width={width}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Button />', () => {
  it('handles onPress', () => {
    const onPress = jest.fn();
    const onMouseDown = jest.fn();
    const onMouseUp = jest.fn();
    // const { container } = render(<Button onPress={onPress} />);
    // fireEvent.press(container.querySelector('HTMLButton')!);
    // expect(onPress).toHaveBeenCalledTimes(1);
    // const handleClick = jest.fn();
    // const { getByText } = render(<Button onPress={onPress} />);
    // const button = getByText('click me');
    // fireEvent.press(button);
    // expect(onPress).toBe(undefined);
    let component: any;
    act(() => {
      component = create(
        <Button
          onPress={onPress}
          onPressIn={onMouseDown}
          onPressOut={onMouseUp}
        />
      );
    });
    const rootInstance: any = component.root;
    const button = rootInstance.findAllByType(Button);
    expect(button.length).toBe(1);
    //  act(() => button[0].props.onPress());
    expect(button[0].props.onPress()).toBe(undefined);
    expect(button[0].props.onPressIn()).toBe(undefined);
    expect(button[0].props.onPressOut()).toBe(undefined);
  });

  // it('handles onPress', () => {
  //   const handleClick = jest.fn();
  //   const { container } = render(<Button onPress={handleClick} />);
  //   fireEvent.click(container.querySelector('HTMLButton')!);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });
});
