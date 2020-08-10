import React, { FC } from 'react';
import Box from '../Box';
import ResizableCell from '../ResizableColumn/ResizableCell';

const ResizableTableRow: FC = (props) => {
  const headerData = ['test1', 'test2', 'test3'];
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      {headerData.map((data) => {
        return <ResizableCell>{data}</ResizableCell>;
      })}
    </Box>
  );
};

export default ResizableTableRow;
