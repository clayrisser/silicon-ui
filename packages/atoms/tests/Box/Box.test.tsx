import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Box from '../../src/Box/Box';
import { borderColor } from 'styled-system';

describe('<Box />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Box />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Box />', () => {
  it('renders correctly', () => {
    const fontSize = 16;
    const bg = 'white';
    const color = 'black';
    const height = 90;
    const padding = 9;
    const width = 600;
    const border = 1;
    const borderStyle = 'solid';
    const borderColor = 'red';
    const tree = renderer
      .create(
        <Box
          fontSize={fontSize}
          bg={bg}
          color={color}
          height={height}
          p={padding}
          border={border}
          width={width}
          borderStyle={borderStyle}
          borderColor={borderColor}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
