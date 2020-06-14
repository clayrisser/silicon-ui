import React, { FC } from 'react';
import { Item as NativeBaseItem } from 'native-base';
import {
  background,
  border,
  layout,
  position,
  shadow,
  space
} from 'styled-system';
import ItemContext from '../contexts/Item';
import { ItemProps, antiForwardItemPropsKeys, splitProps } from './itemProps';
import { createStyled } from '../styled';

const StyledNativeBaseItem = createStyled<ItemProps>(
  NativeBaseItem,
  [background, border, layout, position, shadow, space],
  antiForwardItemPropsKeys
);

const Item: FC<ItemProps> = (props: ItemProps) => {
  const { styledItemProps, customItemProps, nativeItemProps } = splitProps(
    props
  );

  return (
    <ItemContext.Provider value={{ hasItemParent: true }}>
      <StyledNativeBaseItem
        {...styledItemProps}
        {...nativeItemProps}
        {...customItemProps}
      />
    </ItemContext.Provider>
  );
};

Item.defaultProps = {};

export default Item;
