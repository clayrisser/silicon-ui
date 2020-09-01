import React from 'react';
import renderer, { act, create } from 'react-test-renderer';

// import { render, fireEvent } from '@testing-library/react-native';
// import { Button, Text, TextInput, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react';

import HTMLButton from '../../src/Button/Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HTMLButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Button />', () => {
  it('handles onClick', () => {
    const onClick = jest.fn();
    const onMouseDown = jest.fn();
    const onMouseUp = jest.fn();
    // const { container } = render(<Button onClick={handleClick} />);
    // fireEvent.click(container.querySelector('HTMLButton')!);
    // expect(handleClick).toHaveBeenCalledTimes(1);
    // const handleClick = jest.fn();
    // const { getByText } = render(<Button onPress={handleClick} />);
    // const button = getByText('click me');
    // fireEvent.press(button);
    // expect(handleClick).toBe(undefined);
    let component: any;
    act(() => {
      component = create(
        <HTMLButton
          onClick={onClick}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
      );
    });
    const rootInstance: any = component.root;
    const button = rootInstance.findAllByType(HTMLButton);
    expect(button.length).toBe(1);
    //  act(() => button[0].props.onClick());
    expect(button[0].props.onClick()).toBe(undefined);
    expect(button[0].props.onMouseDown()).toBe(undefined);
    expect(button[0].props.onMouseUp()).toBe(undefined);
  });

  it('handles onClick', () => {
    const handleClick = jest.fn();
    const { container } = render(<HTMLButton onClick={handleClick} />);
    fireEvent.click(container.querySelector('HTMLButton')!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
