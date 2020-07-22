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
  DetailedHTMLTableRowsProps,
  splitProps
} from './tableDataProps';
import { info } from 'console';

const HTMLTableData: StyledComponent<
  DetailedHTMLTableRowsProps,
  TableRowProps,
  object
> = styled.div(
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

const TableData: FC<TableRowProps> = (props: TableRowProps) => {
  const color = useColor(props);
  const { customTableRowProps, styledTableRowProps } = splitProps({
    ...props,
    color
  });
  return (
    <>
      {props?.data.map((info: any, index: number) => {
        return (
          <tr
            key={index}
            {...styledTableRowProps}
            {...(customTableRowProps as any)}
          >
            {info.map((infos: string, index: number) => {
              return <td key={index}>{infos}</td>;
            })}
          </tr>
        );
      })}
    </>
  );
};

TableData.defaultProps = {
  autoContrast: false,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  width: '100%'
};

export default TableData;
