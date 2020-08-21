import React, { FC, useState, useEffect } from 'react';
import Box from '../Box';
import ResizableCell from '../ResizableColumn/ResizableCell';
import ResizableWidthContext, {
  ResizableWidth
} from '../contexts/resizableWidth';

const ResizableTableRow: FC = () => {
  // const headerData = ['test1', 'test2', 'test3'];
  const [resizableWidth, setResizableWidth] = useState<ResizableWidth>({
    widths: []
  });
  useEffect(() => {
    // console.log('cell details', resizableWidth.widths);
  });

  return (
    <ResizableWidthContext.Provider value={[resizableWidth, setResizableWidth]}>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <ResizableCell position={0} resizable>
          Head1
        </ResizableCell>
        <ResizableCell position={1} resizable>
          Head2
        </ResizableCell>
        <ResizableCell position={2} resizable>
          Head3
        </ResizableCell>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <ResizableCell position={0}>Head1</ResizableCell>
        <ResizableCell position={1}>Head2</ResizableCell>
        <ResizableCell position={2}>Head3</ResizableCell>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <ResizableCell position={0}>Head1</ResizableCell>
        <ResizableCell position={1}>Head2</ResizableCell>
        <ResizableCell position={2}>Head3</ResizableCell>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <ResizableCell position={0}>Head1</ResizableCell>
        <ResizableCell position={1}>Head2</ResizableCell>
        <ResizableCell position={2}>Head3</ResizableCell>
      </Box>
    </ResizableWidthContext.Provider>
  );
};

export default ResizableTableRow;
