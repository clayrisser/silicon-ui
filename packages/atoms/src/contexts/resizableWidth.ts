import { createContext } from 'react';

export interface ResizableWidth {
  width?: string[];
}

export type SetResizableWidth = (width: ResizableWidth) => any;

export type ResizableWidthContextType = [ResizableWidth, SetResizableWidth];

export default createContext<ResizableWidthContextType>([{}, () => {}]);
