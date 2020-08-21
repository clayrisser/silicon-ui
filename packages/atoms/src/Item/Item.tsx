import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import {
  background,
  border,
  compose,
  layout,
  position,
  shadow,
  space
} from 'styled-system';
import styled, { StyledComponent } from '@emotion/styled';
import ItemContext from '../contexts/Item';
import { ItemProps, DetailedHTMLDivProps, splitProps } from './itemProps';

const HTMLDiv: StyledComponent<
  DetailedHTMLDivProps,
  ItemProps,
  object
> = styled.div(compose(background, border, layout, position, shadow, space));

const Item: FC<ItemProps> = (props: ItemProps) => {
  const { styledItemProps, customItemProps } = splitProps(props);

  function handleClick(_e: any) {
    if (props.onPress) props.onPress();
  }

  return (
    <ItemContext.Provider value={{ hasItemParent: true }}>
      <HTMLDiv
        {...(styledItemProps as any)}
        {...customItemProps}
        onClick={handleClick}
      />
    </ItemContext.Provider>
  );
};

Item.defaultProps = {};

export default Item;
