// import { useTheme } from 'emotion-theming';
// import { Theme } from '../themes';

export interface Props {
  [key: string]: any;
}

export default function useThemeProps<T>(props: T): T {
  //  const theme: Theme = useTheme();
  return Object.entries(props).reduce(
    (props: Props, [key, value]: [string, any]) => {
      return props;
    },
    {}
  ) as T;
}
