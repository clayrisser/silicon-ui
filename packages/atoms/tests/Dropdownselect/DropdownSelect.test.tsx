import React from 'react';
import renderer, { act, create } from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import DropdownSelect from '../../src/DropdownSelect';

describe('<DropdownSelect />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DropdownSelect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('<DropdownOption withProps />', () => {
  it('renders  with all props correctly', () => {
    const value = 'Option';
    const display = 'Option';
    const disabled = true;
    const fontFamily = '';
    const backgroundColor = 'red';
    const fontWeight = 2;
    const fontSize = 3;
    const tree = renderer
      .create(
        <DropdownSelect
          value={value}
          display={display}
          backgroundColor={backgroundColor}
          disabled={disabled}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontSize={fontSize}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Dropdownselect/>', () => {
  it('renders with events', () => {
    const onChange = jest.fn();

    let component: any;
    act(() => {
      component = create(<DropdownSelect onChange={onChange} />);
    });

    const rootInstance: any = component.root;
    const dropdown = rootInstance.findAllByType(DropdownSelect);
    expect(dropdown.length).toBe(1);
    expect(dropdown[0].props.onChange()).toBe(undefined);
  });
});
