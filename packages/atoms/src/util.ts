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

export function createSplitProps<
  Props,
  SplitProps = HashMap<HashMap>,
  SplitSx = HashMap<Partial<ThemeUICSSObject & ThemeDerivedStyles>>
>(
  propsSetsMap: HashMap<string[] | RegExp>,
  lastPropsSetId: string,
  sxsSetsMap: HashMap<string[] | RegExp>,
  lastSxsSetId: string
) {
  return (
    props: Props,
    defaultSx: SxStyleProp = {}
  ): SplitProps & SplitSx & { sx: ThemeUICSSObject & ThemeDerivedStyles } => {
    const propsMap: HashMap<HashMap> = {};
    const sxsMap: HashMap<HashMap> = {};
    Object.keys(propsSetsMap).forEach(
      (propsSetId: string) => (propsMap[propsSetId] = {})
    );
    Object.keys(sxsSetsMap).forEach(
      (sxsSetId: string) => (sxsMap[sxsSetId] = {})
    );
    propsMap[lastPropsSetId] = {};
    sxsMap[lastSxsSetId] = {};
    const clonedProps = { ...props };
    const sx = {
      ...defaultSx,
      ...((props as any).sx || {})
    };
    const propsSetsIds = Object.keys(propsSetsMap);
    const sxsSetsIds = Object.keys(sxsSetsMap);
    Object.entries(clonedProps).forEach(([key, prop]: [string, any]) => {
      for (const propsSetId of propsSetsIds) {
        const propsSet = propsMap[propsSetId];
        const matcher = propsSetsMap[propsSetId];
        if (
          Array.isArray(matcher)
            ? new Set(matcher).has(key)
            : !!key.match(matcher)
        ) {
          propsSet[key] = prop;
          return;
        }
      }
      const propsSet = propsMap[lastPropsSetId];
      propsSet[key] = prop;
    });
    Object.entries(sx).forEach(([key, value]: [string, any]) => {
      for (const sxsSetId of sxsSetsIds) {
        const sxsSet = sxsMap[sxsSetId];
        const matcher = sxsSetsMap[sxsSetId];
        if (
          Array.isArray(matcher)
            ? new Set(matcher).has(key)
            : !!key.match(matcher)
        ) {
          sxsSet[key] = value;
          return;
        }
      }
      const sxsSet = sxsMap[lastSxsSetId];
      sxsSet[key] = value;
    });
    return {
      ...((propsMap as unknown) as SplitProps),
      ...((sxsMap as unknown) as SplitSx),
      sx
    };
  };
}
