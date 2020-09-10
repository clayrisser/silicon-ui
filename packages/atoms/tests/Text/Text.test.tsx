import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer, { act, create } from 'react-test-renderer';
import Text from '../../src/Text';

describe('<Text />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Text withProps />', () => {
  it('renders with all props', () => {
    const children = 'Text';
    const fontSize = '20px';
    const fontFamily = '';
    const fontWeight = '';
    const lineHeight = '';
    const opacity = '';
    const tree = renderer
      .create(
        <Text
          fontSize={fontSize}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          opacity={opacity}
        >
          {children}
        </Text>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Text with events/>', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const onMouseUp = jest.fn();
    const onMouseDown = jest.fn();

    let component: any;

    act(() => {
      component = create(
        <Text
          onPress={onPress}
          // @ts-ignore
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
        />
      );
    });
    const rootInstance: any = component.root;
    const text = rootInstance.findAllByType(Text);
    expect(text.length).toBe(1);
    expect(text[0].props.onPress()).toBe(undefined);
    expect(text[0].props.onMouseUp()).toBe(undefined);
    expect(text[0].props.onMouseDown()).toBe(undefined);
  });
});
