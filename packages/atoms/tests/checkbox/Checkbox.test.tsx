import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Checkbox from '../../src/Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
