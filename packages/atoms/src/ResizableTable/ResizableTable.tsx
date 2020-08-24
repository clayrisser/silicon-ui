import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
// import {
//   background,
//   border,
//   color,
//   compose,
//   layout,
//   position,
//   shadow,
//   space,
//   typography
// } from 'styled-system';
// import useColor from '../hooks/useColor';
import Table from '../Table';
import TableCell from '../TableCell';
import Box from '../Box';
import TableHead from '../TableHead';
// import { TableProps, DetailedHTMLTableProps, splitProps } from './tableProps';

export interface ResizableTableProps {
  resizableColumnStyles?: object;
}

const { resizableColumnStyles }: any = props;

let pageWidth: any;
let curCol: any;
let nxtCol: any;
let curColWidth: any;
// let nxtColWidth: any;

const ResizableTable: FC<ResizableTableProps> = () => {
  const [down, setDown] = useState<boolean>(false);

  async function handleMouseUp() {
    setDown(false);
    curCol = undefined;
    nxtCol = undefined;
    pageWidth = undefined;
    // nxtColWidth = undefined;
    curColWidth = undefined;
  }

  async function handleMouseDown(e: any) {
    setDown(true);
    curCol = e.target.parentElement;
    // nxtCol = curCol.nextElementSibling;
    pageWidth = e.pageX;
    curColWidth = curCol.offsetWidth;
    if (nxtCol) {
      //  nxtColWidth = nxtCol.offsetWidth;
    }
  }

  async function handleMouseMove(e: any) {
    if (curCol && down) {
      const diffX = e.pageX - pageWidth;
      // if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + 'px';

      curCol.style.width = curColWidth + diffX + 'px';
    }
  }

  return (
    <Box>
      <Table>
        <thead>
          <tr>
            <TableHead>
              Company
              <div
                style={resizableColumnStyles}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={() => handleMouseUp()}
                onMouseUp={() => setDown(false)}
                role="presentation"
              />
            </TableHead>
            <TableHead>
              Contact
              <div
                style={resizableColumnStyles}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={() => handleMouseUp()}
                onMouseUp={() => setDown(false)}
                role="presentation"
              />
            </TableHead>
            <TableHead>
              Country
              <div
                style={resizableColumnStyles}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={() => handleMouseUp()}
                onMouseUp={() => setDown(false)}
                role="presentation"
              />
            </TableHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Alfreds Futterkiste</TableCell>
            <TableCell>Maria Anders</TableCell>
            <TableCell>Germany</TableCell>
          </tr>
          <tr>
            <TableCell>Alfreds Futterkiste</TableCell>
            <TableCell>Maria Anders</TableCell>
            <TableCell>Germany</TableCell>
          </tr>
          <tr>
            <TableCell>Alfreds Futterkiste</TableCell>
            <TableCell>Maria Anders</TableCell>
            <TableCell>Germany</TableCell>
          </tr>
          <tr>
            <TableCell>Alfreds Futterkiste</TableCell>
            <TableCell>Maria Anders</TableCell>
            <TableCell>Germany</TableCell>
          </tr>
        </tbody>
      </Table>
    </Box>
  );
};

ResizableTable.defaultProps = {
  resizableColumnStyles: {
    top: 0,
    right: 0,
    width: '5px',
    position: 'absolute',
    cursor: 'col-resize',
    /* remove backGroundColor later */
    backgroundColor: 'red',
    userSelect: 'none',
    /* table height */
    height: '-webkit-fill-available',
    paddingLeft: '20px',
    paddingRight: '20px'
  }
};

export default styled(ResizableTable)``;
