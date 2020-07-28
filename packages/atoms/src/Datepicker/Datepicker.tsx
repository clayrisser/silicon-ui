import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
import useColor from '../hooks/useColor';
import {
  DatepickerProps,
  DetailedHTMLDatepickerProps,
  splitProps
} from './datepickerProps';

const HTMLDatepicker: StyledComponent<
  DetailedHTMLDatepickerProps,
  DatepickerProps,
  object
> = styled.input(
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

const Datepicker: FC<DatepickerProps> = (props: DatepickerProps) => {
  const color = useColor(props);
  const {
    customDatepickerProps,
    styledDatepickerProps,
    nativeItemProps
  } = splitProps({
    ...props,
    color
  });
  return (
    <HTMLDatepicker
      {...styledDatepickerProps}
      {...nativeItemProps}
      {...(customDatepickerProps as any)}
    />
  );
};

Datepicker.defaultProps = {
  backgroundColor: 'primary',
  borderRadius: 2,
  borderWidth: 0,
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  width: '100%'
};

export default Datepicker;
