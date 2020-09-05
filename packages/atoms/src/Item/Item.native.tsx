import React, { FC } from 'react';
import { NativeBase, Item as NativeBaseItem } from 'native-base';
import {
  background,
  border,
  compose,
  layout,
  position,
  shadow,
  space
} from 'styled-system';
import ItemContext from '../contexts/Item';
import { createStyled } from '../styled';
import {
  StyledItemProps,
  ItemProps,
  antiForwardItemPropsKeys,
  splitProps
} from './itemProps';

const StyledNativeBaseItem = createStyled<StyledItemProps, NativeBase.Item>(
  NativeBaseItem,
  {
    forwardPropsBlacklist: antiForwardItemPropsKeys
  }
)(compose(background, border, layout, position, shadow, space));

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
