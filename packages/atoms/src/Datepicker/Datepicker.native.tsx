import React, { FC } from 'react';
import {
  Item as NativeBaseItem,
  DatePicker as NativeBaseDatepicker
} from 'native-base';
import {
  background,
  border,
  color,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useColor from '../hooks/useColor';
import useItem from '../hooks/useItem';
import { createStyled } from '../styled';
import {
  DatepickerProps,
  antiForwardInputPropsKeys,
  splitProps
} from './datepickerProps';

const StyledNativeBaseDatepicker = createStyled<DatepickerProps>(
  NativeBaseDatepicker,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardInputPropsKeys
);

const Datepicker: FC<DatepickerProps> = (props: DatepickerProps) => {
  const item = useItem();
  const color = useColor(props);
  const {
    customDatepickerProps,
    nativeDatepickerProps,
    nativeItemProps,
    styledDatepickerProps
  } = splitProps({
    ...props,
    color
  });
  const styledNativeBaseDatepicker = (
    <StyledNativeBaseDatepicker
      {...customDatepickerProps}
      {...nativeDatepickerProps}
      {...styledDatepickerProps}
    />
  );
  if (item.hasItemParent) return styledNativeBaseDatepicker;
  return (
    <NativeBaseItem {...nativeItemProps}>
      {styledNativeBaseDatepicker}
    </NativeBaseItem>
  );
};

Datepicker.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
  // autoContrast: false,
  backgroundColor: 'green',
  fontSize: 6
};

export default Datepicker;
