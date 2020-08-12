import { createContext } from 'react';

export interface ResizableWidth {
  widths?: string[];
}

export type SetResizableWidth = (widths: ResizableWidth) => any;

export type ResizableWidthContextType = [ResizableWidth, SetResizableWidth];

export default createContext<ResizableWidthContextType>([{}, () => {}]);
