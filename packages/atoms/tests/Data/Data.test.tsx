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
