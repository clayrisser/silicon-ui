import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import Item from '../../src/Item';

describe('<Item />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Item />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
