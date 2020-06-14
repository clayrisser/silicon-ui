import { useContext } from 'react';
import ItemContext, { ItemContextValue } from '../contexts/Item';

export default function useItem(): ItemContextValue {
  return useContext<ItemContextValue>(ItemContext);
}
