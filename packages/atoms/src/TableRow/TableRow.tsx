import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
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
import useColor from '../hooks/useColor';
import {
  TableRowProps,
  DetailedHTMLTableRowProps,
  splitProps
} from './tableRowProps';

const HTMLTableRow: StyledComponent<
  DetailedHTMLTableRowProps,
  TableRowProps,
  object
> = styled.tr(
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

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
  const color = useColor(props);
  const {
    customTableRowProps,
    styledTableRowProps,
    nativeItemProps
  } = splitProps({
    ...props,
    color
  });
  return (
    <HTMLTableRow
      {...styledTableRowProps}
      {...nativeItemProps}
      {...(customTableRowProps as any)}
    >
      {props?.data.map((th: string, index: number) => {
        return (
          <th key={index} style={props.thStyles}>
            {th}
          </th>
        );
      })}
    </HTMLTableRow>
  );
};

TableRow.defaultProps = {
  autoContrast: false,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  width: '100%',
  data: [''],
  textAlign: 'left',
  thStyles: {}
};

export default TableRow;
