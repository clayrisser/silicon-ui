import React, { FC, useState, useEffect } from 'react';
import Box from '../Box';
import ResizableCell from '../ResizableColumn/ResizableCell';
import ResizableWidthContext, {
  ResizableWidth
} from '../contexts/resizableWidth';

const ResizableTableRow: FC = (props) => {
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
        <ResizableCell position={0} resizable={true}>
          Head1
        </ResizableCell>
        <ResizableCell position={1} resizable={true}>
          Head2
        </ResizableCell>
        <ResizableCell position={2} resizable={true}>
          Head3
        </ResizableCell>
        {/* <ResizableCell position={3} resizable={true}>
          Head4
        </ResizableCell> */}
        {/* {headerData.map((data, index) => {
          return (
            <ResizableCell key={index} position={index} resizable={true}>
              {data}
            </ResizableCell>
          );
        })} */}
      </Box>
    </ResizableWidthContext.Provider>
  );
};

export default ResizableTableRow;
