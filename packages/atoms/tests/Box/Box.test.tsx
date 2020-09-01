import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Box from '../../src/Box/Box';

describe('<Box />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Box />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Box />', () => {
  it('renders correctly', () => {
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
