import styled, { StyledComponent } from '@emotion/styled';
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  LegacyRef,
  forwardRef,
  useEffect,
  useState
} from 'react';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import { BoxProps, splitProps } from './boxProps';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  BoxProps,
  object
> = styled.div(
  compose(
    background,
    border,
    color,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Box = forwardRef((props: BoxProps, boxRef: LegacyRef<any>) => {
  let [entered, setEntered] = useState(true);
  let [pressed, setPressed] = useState(false);
  const { styledBoxProps, customBoxProps, touchableOpacityProps } = splitProps(
    props
  );

  useEffect(() => {
    if (!props.onPressOut && !props.onPull) return () => {};
    function handleMouseUp(e: Event) {
      if (!entered && pressed && props.onPressOut) {
        props.onPressOut(bakeEvent(e));
      }
      pressed = false;
      setPressed(false);
    }
    function handleMouseMove(e: Event) {
      if (!entered && pressed && props.onPull) {
        props.onPull(bakeEvent(e));
      }
    }
    window.document.body.addEventListener('mouseup', handleMouseUp);
    window.document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.document.body.removeEventListener('mouseup', handleMouseUp);
      window.document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, [entered, pressed]);

  function handleMouseEnter() {
    entered = true;
    setEntered(entered);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.releasePressOnExit) {
      if (pressed && props.onPressOut) props.onPressOut(e);
      pressed = false;
      setPressed(false);
    }
    entered = false;
    setEntered(entered);
  }

  function handleClick(e: any) {
    if (props.onPress) props.onPress(e);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (pressed && props.onPull) props.onPull(e);
  }

  function handleMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.onPressOut) props.onPressOut(e);
    pressed = false;
    setPressed(false);
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    pressed = true;
    setPressed(true);
    if (props.onPressIn) props.onPressIn(e);
  }

  function handleBlur(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.onPress) props.onPress(e);
  }

  return (
    <HTMLDiv
      {...touchableOpacityProps}
      {...(styledBoxProps as any)}
      onBlur={handleBlur}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={boxRef}
      theme={customBoxProps.theme}
    >
      {customBoxProps.children}
    </HTMLDiv>
  );
});

function bakeEvent(e: any): React.MouseEvent<HTMLDivElement, MouseEvent> {
  return {
    pageX: e.pageX,
    pageY: e.pageY,
    target: e.target
  } as React.MouseEvent<HTMLDivElement, MouseEvent>;
}

Box.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'transparent',
  children: <></>,
  color: 'red',
  fontFamily: 'body',
  fontSize: 'body',
  fontWeight: 'body',
  height: '100%',
  lineHeight: 'body'
};

export default styled(Box)`
  :active {
    opacity: ${({ activeOpacity }: BoxProps) => activeOpacity};
  }
`;
