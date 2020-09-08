import React, { FC, useState } from 'react';
import { styled } from 'native-theme-ui';
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
import {
  StyledTextareaProps,
  TextareaProps,
  antiForwardTextareaPropsKeys,
  splitProps
} from './textareaProps';

const StyledNativeBaseTextarea = styled<
  StyledTextareaProps,
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
  const [input, setInput] = useState<string>('');

  const {
    customTextareaProps,
    nativeTextareaProps,
    nativeItemProps,
    styledTextareaProps
  } = splitProps(props);

  function handleInput(e: any) {
    setInput(e);
    // if (props.onPress) {
    //   props.onPress(e);
    //   setInput(e);
    // }
  }

  const styledNativeBaseTextarea = (
    <StyledNativeBaseTextarea
      {...(customTextareaProps as any)}
      {...nativeTextareaProps}
      {...styledTextareaProps}
      value={input}
      onChangeText={(e: any) => handleInput(e)}
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
  width: '100%'
};

export default Textarea;
