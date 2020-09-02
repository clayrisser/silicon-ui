import React, { FC } from 'react';
import { Table as NativeTable } from 'react-native-table-component';
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
// import useColor from '../hooks/useColor';
// import useItem from '../hooks/useItem';
import { createStyled } from '../styled';
import {
  TableProps,
  antiForwardTablePropsKeys,
  splitProps
} from './tableProps';

const StyledTable = createStyled<TableProps>(
  // @ts-ignore
  NativeTable,
  [background, border, color, layout, position, shadow, space, typography],
  antiForwardTablePropsKeys
);

const Table: FC<TableProps> = (props: TableProps) => {
  const { customTableProps, nativeTableProps, styledTableProps } = splitProps({
    ...props
  });
  // const styledTable = (
  //   <StyledTable
  //     {...customTableProps}
  //     {...nativeTableProps}
  //     {...styledTableProps}
  //   />
  // );
  // const children =
  //   typeof customTableProps.children === 'string' ? (
  //     <StyledText {...styledTextProps} width="100%">
  //       {customTableProps.children}
  //     </StyledText>
  //   ) : (
  //     customTableProps.children
  //   );
  return (
    <StyledTable
      {...styledTableProps}
      {...nativeTableProps}
      {...customTableProps}
    />
  );
};

Table.defaultProps = {};

export default Table;
