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
