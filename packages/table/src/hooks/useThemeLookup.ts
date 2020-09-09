import useSx from './useSx';

export default function useThemeLookup() {
  const sx = useSx();
  return <T>(key: string, value: any): T => {
    try {
      return sx({ [key]: value })[key] as T;
    } catch (err) {
      return value;
    }
  };
}
