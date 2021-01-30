declare module '@theme-ui/color' {
  import { Theme } from '@theme-ui/css';

  export declare const getColor: (theme: Theme, color: string) => any;
  export declare const darken: (c: string, n: number) => (t: Theme) => string;
  export declare const lighten: (c: string, n: number) => (t: Theme) => string;
  export declare const rotate: (c: string, d: number) => (t: Theme) => string;
  export declare const hue: (c: string, h: number) => (t: Theme) => string;
  export declare const saturation: (
    c: string,
    s: number
  ) => (t: Theme) => string;
  export declare const lightness: (
    c: string,
    l: number
  ) => (t: Theme) => string;
  export declare const desaturate: (
    c: string,
    n: number
  ) => (t: Theme) => string;
  export declare const saturate: (c: string, n: number) => (t: Theme) => string;
  export declare const shade: (c: string, n: number) => (t: Theme) => string;
  export declare const tint: (c: string, n: number) => (t: Theme) => string;
  export declare const transparentize: (
    c: string,
    n: number
  ) => (t: Theme) => string;
  export declare const alpha: (c: string, n: number) => (t: Theme) => string;
  export declare const mix: (
    a: string,
    b: string,
    n?: number
  ) => (t: Theme) => string;
  export declare const complement: (c: string) => (t: Theme) => string;
  export declare const invert: (c: string) => (t: Theme) => string;
  export declare const grayscale: (c: string) => (t: Theme) => string;
}
