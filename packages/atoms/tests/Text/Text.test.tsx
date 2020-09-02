import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
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
