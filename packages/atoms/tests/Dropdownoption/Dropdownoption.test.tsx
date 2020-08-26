import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import DropdownOption from '../../src/DropdownOption';

describe('<DropdropOption />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DropdownOption />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
