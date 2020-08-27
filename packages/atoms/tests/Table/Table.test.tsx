import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Table from '../../src/Table';

describe('<Table />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Table />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
