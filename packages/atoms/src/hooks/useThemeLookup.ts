import useSx from './useSx';

export default function useThemeLookup() {
  const sx = useSx();
  return <T>(key: string, value: any): T => {
    return sx({ [key]: value })[key] as T;
  };
}
