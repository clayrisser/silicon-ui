// import { useThemeUI } from 'theme-ui'

export interface Props {
  [key: string]: any;
}

export default function useThemeProps<T>(props: T): T {
  // const { theme } = useThemeUI();
  return Object.entries(props).reduce(
    (props: Props, [_key, _value]: [string, any]) => {
      return props;
    },
    {}
  ) as T;
}
