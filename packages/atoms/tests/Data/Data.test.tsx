import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import Data from '../../src/Data';

describe('<Data />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Data />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Data with props />', () => {
  it('renders correctly with props', () => {
    const backgroundColor = 'transparent';
    const autoContrast = false;
    const fontSize = 2;
    const fontWeight = 'body';
    const lineHeight = 'body';
    const tree = renderer
      .create(
        <Data
          backgroundColor={backgroundColor}
          autoContrast={autoContrast}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
