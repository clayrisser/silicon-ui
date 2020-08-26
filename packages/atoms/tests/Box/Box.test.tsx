import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Box from '../../src/Box/Box';

describe('<Box />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Box />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
