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
import ColumnResizer from 'react-column-resizer';
import useColor from '../hooks/useColor';
import Table from '../Table';
import Data from '../Data';
import Box from '../Box';
import TableHead from '../TableHead';
// import { TableProps, DetailedHTMLTableProps, splitProps } from './tableProps';

const ResizableTable: FC = (props) => {
  return (
    <Box>
      <Table>
        <tr>
          <TableHead>Company</TableHead>
          <TableHead />
          <TableHead>Contact</TableHead>
          <TableHead />
          <TableHead>Country</TableHead>
        </tr>
        <tr>
          <Data>Alfreds Futterkiste</Data>
          <ColumnResizer />
          <Data>Maria Anders</Data>
          <ColumnResizer />
          <Data>Germany</Data>
        </tr>
        <tr>
          <Data>Alfreds Futterkiste</Data>
          <ColumnResizer />
          <Data>Maria Anders</Data>
          <ColumnResizer />
          <Data>Germany</Data>
        </tr>
        <tr>
          <Data>Alfreds Futterkiste</Data>
          <ColumnResizer />
          <Data>Maria Anders</Data>
          <ColumnResizer />
          <Data>Germany</Data>
        </tr>
        <tr>
          <Data>Alfreds Futterkiste</Data>
          <ColumnResizer />
          <Data>Maria Anders</Data>
          <ColumnResizer />
          <Data>Germany</Data>
        </tr>
      </Table>
    </Box>
  );
};

ResizableTable.defaultProps = {
  backgroundColor: 'transparent',
  autoContrast: false,
  fontSize: 2,
  fontWeight: 'body',
  lineHeight: 'body',
  width: '100%'
};

export default ResizableTable;
