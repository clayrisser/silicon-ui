import React, { FC, useState, useEffect } from 'react';
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
  const [date, setDate] = useState<string>('');
  const {
    customDatepickerProps,
    styledDatepickerProps,
    nativeDatepickerProps
  } = splitProps(props);

  useEffect(() => {
    if (customDatepickerProps.value !== undefined)
      setDate(customDatepickerProps.value);
  }, [customDatepickerProps.value]);

  function handleChange(e: any) {
    if (props.onPress) {
      props.onPress(e);
      setDate(e.target.value);
    }
  }
  return (
    <HTMLDatepicker
      {...styledDatepickerProps}
      {...nativeDatepickerProps}
      {...(customDatepickerProps as any)}
      value={date}
      onChange={handleChange}
      // onDateChange={handleChange}
    />
  );
};

Datepicker.defaultProps = {
  backgroundColor: 'inverseText',
  borderRadius: 0,
  borderWidth: 0,
  fontFamily: 'body',
  type: 'date',
  fontSize: 0,
  fontWeight: 'body',
  lineHeight: 'body',
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  width: '100%'
};

export default Datepicker;
