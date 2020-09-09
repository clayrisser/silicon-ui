import React, { FC, ReactNode, useState } from 'react';
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
import ColumnContext from '../contexts/Column';
import RowContext, { RowMeta } from '../contexts/Row';
import { RowProps, DetailedHTMLRowProps, splitProps } from './rowProps';

const HTMLRow: StyledComponent<
  DetailedHTMLRowProps,
  RowProps,
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

const Row: FC<RowProps> = (props: RowProps) => {
  const { customRowProps, styledRowProps } = splitProps({ ...props });
  const [row, setRow] = useState<RowMeta | null>({
    resizable: props.resizable,
    cols: []
  });

  function renderCells() {
    let { children } = customRowProps;
    if (!Array.isArray(children)) children = [children];
    return ((children as unknown) as ReactNode[]).map(
      (tableCell: ReactNode, key: number) => (
        <ColumnContext.Provider value={{ id: key }}>
          {tableCell}
        </ColumnContext.Provider>
      )
    );
  }

  return (
    <HTMLRow
      borderWidth={styledRowProps.borderWidth || 0}
      display="flex"
      flexDirection="col"
      overflow="hidden"
      {...((styledRowProps as unknown) as any)}
      verticalAlign="top"
      style={{ whiteSpace: 'nowrap' }}
    >
      <RowContext.Provider value={[row, setRow]}>
        {renderCells()}
      </RowContext.Provider>
    </HTMLRow>
  );
};

Row.defaultProps = {
  borderStyle: 'solid'
};

export default Row;
