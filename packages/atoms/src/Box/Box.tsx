import styled, { StyledComponent } from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState
} from 'react';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import { BoxProps, StyledBoxProps } from './boxProps';
import { Theme } from '../themes';
import { autoContrast } from '../color';

export type DetailedHTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  StyledBoxProps,
  object
> = styled.div(
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Box: FC<BoxProps> = (props: BoxProps) => {
  const theme: Theme = useTheme();
  const [color, setColor] = useState(props.color as string);

  useEffect(() => {
    setColor(
      autoContrast(
        props.backgroundColor
          ? theme.colors[props.backgroundColor as string] ||
              (props.backgroundColor as string)
          : theme.colors.primary,
        theme.colors.inverseText || theme.colors.text,
        typeof props.autoContrast === 'undefined'
          ? theme.autoContrast
          : props.autoContrast
      )
    );
  }, []);

  const clonedProps: BoxProps = {
    color,
    ...props
  };
  delete clonedProps.activeOpacity;
  delete clonedProps.autoContrast;
  delete clonedProps.onPress;
  delete clonedProps.onPressIn;
  delete clonedProps.onPressOut;
  delete clonedProps.theme;

  function handleClick(_e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.onPress) props.onPress();
  }

  return (
    <HTMLDiv {...(clonedProps as DetailedHTMLDivProps)} onClick={handleClick} />
  );
};

Box.defaultProps = {
  activeOpacity: 1,
  backgroundColor: 'background',
  children: '',
  fontFamily: 'body',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body'
};

export default styled(Box)`
  :active {
    opacity: ${({ activeOpacity }: BoxProps) => activeOpacity};
  }
`;
