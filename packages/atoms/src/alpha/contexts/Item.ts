import { createContext } from 'react';

export interface ItemContextValue {
  hasItemParent: boolean;
}

export default createContext<ItemContextValue>({
  hasItemParent: false
});
