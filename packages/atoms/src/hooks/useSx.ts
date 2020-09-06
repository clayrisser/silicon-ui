import { css, useThemeUI } from 'theme-ui';

export default function useSx() {
  const { theme } = useThemeUI();
  return function sx<T = any>(args?: any): T {
    return (css(args)(theme) as unknown) as T;
  };
}
