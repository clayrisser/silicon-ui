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
  const [date, setDate] = useState<string>('');
  const color = useColor(props);
  const {
    customDatepickerProps,
    styledDatepickerProps,
    nativeItemProps,
    nativeDatepickerProps
  } = splitProps({
    ...props,
    color
  });

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
      {...nativeItemProps}
      {...nativeDatepickerProps}
      {...(customDatepickerProps as any)}
      value={date}
      onChange={handleChange}
      // onDateChange={handleChange}
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
