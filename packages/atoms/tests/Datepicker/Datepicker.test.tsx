import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import DatePicker from '../../src/Datepicker';

describe('<DatePicker />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DatePicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
