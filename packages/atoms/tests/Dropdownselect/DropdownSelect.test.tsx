import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import DropdownSelect from '../../src/DropdownSelect';

describe('<DropdownSelect />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DropdownSelect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
