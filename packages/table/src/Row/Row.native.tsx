import React, { FC, useState, ReactNode } from 'react';
import { styled } from 'native-theme-ui';
import {
  Row as NativeRow,
  RowProps as NativeRowProps
} from 'react-native-table-component';
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
import {
  StyledRowProps,
  RowProps,
  antiForwardRowPropsKeys,
  splitProps
} from './rowProps';

const StyledRow = styled<StyledRowProps, NativeRowProps>(NativeRow, {
  forwardPropsBlacklist: antiForwardRowPropsKeys
})(
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
  const [row, setRow] = useState<RowMeta | null>(null);

  const { customRowProps, nativeRowProps, styledRowProps } = splitProps({
    ...props
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
    <StyledRow {...styledRowProps} {...nativeRowProps} {...customRowProps}>
      <RowContext.Provider value={[row, setRow]}>
        {renderCells()}
      </RowContext.Provider>
    </StyledRow>
  );
};

Row.defaultProps = {};

export default Row;
