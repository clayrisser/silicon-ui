import React, { FC } from 'react';
import { Item as NativeBaseItem } from 'native-base';
import { Table } from 'react-native-table-component';

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
  TableProps,
  antiForwardTablePropsKeys,
  splitProps
} from './tableProps';

const StyledTable = createStyled<TableProps>(
  //@ts-ignore
  Table,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardTablePropsKeys
);

const Input: FC<TableProps> = (props: TableProps) => {
  const item = useItem();
  const color = useColor(props);
  const {
    customTableProps,
    nativeTableProps,
    nativeItemProps,
    styledTableProps
  } = splitProps({
    ...props,
    color
  });
  const styledTable = (
    <StyledTable
      {...customTableProps}
      {...nativeTableProps}
      {...styledTableProps}
    />
  );
  if (item.hasItemParent) return styledTable;
  return <NativeBaseItem {...nativeItemProps}>{styledTable}</NativeBaseItem>;
};

Input.defaultProps = {
  // fontFamily: 'body',
  // fontWeight: 'body',
  // lineHeight: 'body',
  autoContrast: false,
  backgroundColor: '#FFFFFF00',
  fontSize: 0
};

export default Input;
