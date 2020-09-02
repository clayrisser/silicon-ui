import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import Image from '../../src/Image';

describe('<Image source />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Image source="abc" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('<Image  withProps/>', () => {
  it('renders  with all  props correctly', () => {
    const imageSrc = '';

    const tree = renderer.create(<Image source={imageSrc} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe('<Image  withProps/>', () => {
//   it('renders  with all  props correctly', () => {
//     const imageSrc = '';

//     const tree = renderer
//       .create(<Image imageSrc={imageSrc} style={{ width: '200px' }} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
