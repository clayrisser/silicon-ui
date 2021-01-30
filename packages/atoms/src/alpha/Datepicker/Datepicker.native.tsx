import React, { FC } from 'react';
import { styled } from 'native-theme-ui';
import {
  DatePicker as NativeBaseDatepicker,
  Item as NativeBaseItem,
  NativeBase
} from 'native-base';
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
import useItem from '../hooks/useItem';
import {
  DatepickerProps,
  StyledDatepickerProps,
  antiForwardInputPropsKeys,
  splitProps
} from './datepickerProps';

const StyledNativeBaseDatepicker = styled<
  StyledDatepickerProps,
  NativeBase.DatePicker
>(NativeBaseDatepicker, { forwardPropsBlacklist: antiForwardInputPropsKeys })(
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
  const item = useItem();
  const {
    customDatepickerProps,
    nativeDatepickerProps,
    styledDatepickerProps
  } = splitProps(props);
  function handleChange(e: any) {
    if (props.onPress) {
      props.onPress(e);
    }
  }
  const styledNativeBaseDatepicker = (
    <StyledNativeBaseDatepicker
      {...(customDatepickerProps as any)}
      {...nativeDatepickerProps}
      {...styledDatepickerProps}
      onDateChange={handleChange}
      disabled={false}
    />
  );
  if (item.hasItemParent) return styledNativeBaseDatepicker;
  return <NativeBaseItem>{styledNativeBaseDatepicker}</NativeBaseItem>;
};

Datepicker.defaultProps = {
  backgroundColor: 'green',
  fontSize: 6
};

export default Datepicker;
