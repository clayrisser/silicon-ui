import React, { FC, useState } from 'react';
import {
  Item as NativeBaseItem,
  Textarea as NativeBaseTextarea
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
  TextareaProps,
  antiForwardTextareaPropsKeys,
  splitProps
} from './textareaProps';

const StyledNativeBaseTextarea = createStyled<TextareaProps>(
  NativeBaseTextarea,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardTextareaPropsKeys
);

const Textarea: FC<TextareaProps> = (props: TextareaProps) => {
  const item = useItem();
  const color = useColor(props);
  const [input, setInput] = useState<string>('');

  const {
    customTextareaProps,
    nativeTextareaProps,
    nativeItemProps,
    styledTextareaProps
  } = splitProps({
    ...props,
    color
  });
  function handleInput(e: any) {
    if (props.onFocus) {
      props.onFocus(e);
      setInput(e);
    }
  }
  const styledNativeBaseTextarea = (
    <StyledNativeBaseTextarea
      {...customTextareaProps}
      {...nativeTextareaProps}
      {...styledTextareaProps}
      onChangeText={handleInput}
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
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
  autoContrast: false,
  backgroundColor: '#FFFFFF00',
  fontSize: 0
};

export default Textarea;
