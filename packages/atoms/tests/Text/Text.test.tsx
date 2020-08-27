import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Text from '../../src/Text';

describe('<Text />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
