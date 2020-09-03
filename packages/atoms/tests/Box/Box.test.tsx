import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { act } from '@testing-library/react-native';
import { create } from 'react-test-renderer';
import Box from '../../src/Box/Box';

describe('<Box />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Box />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Box with props />', () => {
  it('renders correctly with props', () => {
    const fontSize = 16;
    const bg = 'white';
    const color = 'black';
    const height = 90;
    const padding = 9;
    const width = 600;
    const border = 1;
    const borderStyle = 'solid';
    const borderColor = 'red';
    const backgroundColor = 'transparent';
    const activeOpacity = 1;
    const tree = renderer
      .create(
        <Box
          fontSize={fontSize}
          bg={bg}
          color={color}
          height={height}
          p={padding}
          border={border}
          width={width}
          borderStyle={borderStyle}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          activeOpacity={activeOpacity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('handles onClick', () => {
  //   const handleClick = jest.fn();
  //   const handleMouseDown = jest.fn();
  //   const handleMouseLeave = jest.fn();
  //   const handleMouseMove = jest.fn();
  //   const handleMouseUp = jest.fn();
  //   const handleBlur = jest.fn();
  //   const { container } = render(
  //     <Box
  //       onClick={handleClick}
  //       onBlur={handleBlur}
  //       onMouseEnter={handleMouseDown}
  //       onMouseDown={handleMouseDown}
  //       onMouseLeave={handleMouseLeave}
  //       onMouseMove={handleMouseMove}
  //       onMouseUp={handleMouseUp}
  //     />
  //   );
  //   fireEvent.click(container.querySelector('HTMLDiv')!);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  //   fireEvent.mouseDown(container.querySelector('HTMLDiv')!);
  //   expect(handleMouseDown).toBe(undefined);
  // });
});

describe('<Box with events />', () => {
  it('renders correctly with events', () => {
    const onPress = jest.fn();
    const onMouseDown = jest.fn();
    const onMouseEnter = jest.fn();
    const onBlur = jest.fn();
    const onMouseMove = jest.fn();
    const onMouseLeave = jest.fn();
    const onMouseUp = jest.fn();

    let component: any;
    act(() => {
      component = create(
        <Box
          onPress={onPress}
          onBlur={onBlur}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
        />
      );
    });
    const rootInstance: any = component.root;
    const box = rootInstance.findAllByType(Box);
    expect(box.length).toBe(1);
    expect(box[0].props.onPress()).toBe(undefined);
    expect(box[0].props.onMouseDown()).toBe(undefined);
    expect(box[0].props.onMouseEnter()).toBe(undefined);
    expect(box[0].props.onBlur()).toBe(undefined);
    expect(box[0].props.onMouseLeave()).toBe(undefined);
    expect(box[0].props.onMouseUp()).toBe(undefined);
  });
});
