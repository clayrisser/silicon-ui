import { SxStyleProp, ThemeDerivedStyles, ThemeUICSSObject } from 'theme-ui';
import { HashMap } from './types';

export interface Props {
  [key: string]: any;
}

export function splitTouchableProps<T>(props: Props): [T, Props] {
  const clonedProps = { ...props };
  const touchableProps: { [key: string]: any } = {};
  Object.entries(clonedProps).forEach(([key, prop]: [string, any]) => {
    if (
      key.length >= 3 &&
      key.substr(0, 2) === 'on' &&
      key[2] === key[2].toUpperCase()
    ) {
      touchableProps[key] = prop;
      delete clonedProps[key];
    }
  });
  return [clonedProps as T, touchableProps];
}

export function createSplitProps<Props, SplitProps = HashMap<HashMap>>(
  setsMap: HashMap<string[]>,
  lastSetId: string
) {
  return (
    props: Props,
    defaultSx: SxStyleProp = {}
  ): SplitProps & { sx: ThemeUICSSObject & ThemeDerivedStyles } => {
    const propsMap: HashMap<HashMap> = {};
    Object.keys(setsMap).forEach((setId: string) => (propsMap[setId] = {}));
    propsMap[lastSetId] = {};
    const clonedProps = { ...props };
    const setIds = Object.keys(setsMap);
    Object.entries(clonedProps).forEach(([key, prop]: [string, any]) => {
      for (const setId of setIds) {
        const setProps = propsMap[setId];
        const setKeys = new Set(setsMap[setId]);
        if (setKeys.has(key)) {
          setProps[key] = prop;
          return;
        }
      }
      const setProps = propsMap[lastSetId];
      setProps[key] = prop;
    });
    return {
      ...((propsMap as unknown) as SplitProps),
      sx: {
        ...defaultSx,
        ...((props as any).sx || {})
      }
    };
  };
}
