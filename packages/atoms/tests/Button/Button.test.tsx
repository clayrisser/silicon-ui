import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import Button from '../../src/Button/Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
