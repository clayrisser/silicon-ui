import React, { FC, useState, useEffect } from 'react';
import Box from '../Box';
import ResizableCell from '../ResizableColumn/ResizableCell';
import ResizableWidthContext, {
  ResizableWidth
} from '../contexts/resizableWidth';

const ResizableTableRow: FC = (props) => {
  const headerData = ['test1', 'test2', 'test3'];
  const [resizableWidth, setResizableWidth] = useState<ResizableWidth>({});
  useEffect(() => {
    console.log('hfdzxgf', resizableWidth);
  });

  return (
    <ResizableWidthContext.Provider value={[resizableWidth, setResizableWidth]}>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        {headerData.map((data) => {
          return <ResizableCell>{data}</ResizableCell>;
        })}
      </Box>
    </ResizableWidthContext.Provider>
  );
};

export default ResizableTableRow;
