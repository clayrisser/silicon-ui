import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';

import Input from '../../src/Input';

describe('<Input />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input />', () => {
  it('renders correctly', () => {
    const fontSize = 16;
    const bg = 'white';
    const color = 'black';
    const height = 90;
    const padding = 9;
    const width = 600;
    const border = 1;
    const borderStyle = 'solid';
    const borderColor = 'green';
    const backgroundColor = 'rerd';
    const lineHeight = 2;
    const autoContrast = true;
    const fontWeight = 2;
    const borderWidth = 1;
    const paddingTop = 6;
    const tree = renderer
      .create(
        <Input
          fontSize={fontSize}
          fontWeight={fontWeight}
          borderWidth={borderWidth}
          bg={bg}
          color={color}
          height={height}
          p={padding}
          border={border}
          width={width}
          borderStyle={borderStyle}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          autoContrast={autoContrast}
          lineHeight={lineHeight}
          paddingTop={paddingTop}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
