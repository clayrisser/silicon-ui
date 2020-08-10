import { createContext } from 'react';

export interface ResizableWidth {
  width?: number;
  cellIndex?: number;
}

export type SetResizableWidth = (cellDetails: ResizableWidth) => any;

export type ResizableWidthContextType = [ResizableWidth, SetResizableWidth];

export default createContext<ResizableWidthContextType>([{}, () => {}]);
