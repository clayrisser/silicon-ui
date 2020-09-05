import React, { FC } from 'react';
import {
  Item as NativeBaseItem,
  NativeBase,
  Textarea as NativeBaseTextarea
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
import { createStyled } from '../styled';
import {
  NativeTextareaProps,
  TextareaProps,
  antiForwardTextareaPropsKeys,
  splitProps
} from './textareaProps';

const StyledNativeBaseTextarea = createStyled<
  NativeTextareaProps,
  NativeBase.Textarea
>(NativeBaseTextarea, { forwardPropsBlacklist: antiForwardTextareaPropsKeys })(
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

const Textarea: FC<TextareaProps> = (props: TextareaProps) => {
  const item = useItem();

  const {
    customTextareaProps,
    nativeTextareaProps,
    nativeItemProps,
    styledTextareaProps
  } = splitProps(props);

  const styledNativeBaseTextarea = (
    <StyledNativeBaseTextarea
      {...(customTextareaProps as any)}
      {...nativeTextareaProps}
      {...styledTextareaProps}
      rowSpan={5}
      bordered
    />
  );
  if (item.hasItemParent) return styledNativeBaseTextarea;
  return (
    <NativeBaseItem {...nativeItemProps}>
      {styledNativeBaseTextarea}
    </NativeBaseItem>
  );
};

Textarea.defaultProps = {
  autoContrast: false,
  backgroundColor: '#FFFFFF00',
  fontSize: 0
};

export default Textarea;
