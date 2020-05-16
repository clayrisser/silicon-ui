declare module 'contrast-color-generator' {
  export interface Color {
    hexStr: string;
  }

  export class Generator {
    constructor(hue: number, options?: Options);
    static BRIGHTER_FIRST: number;
    static BRIGHTER_ONLY: number;
    static DARKER_FIRST: number;
    static DARKER_ONLY: number;
    generate(color: string): Color;
  }

  export interface Options {
    minimumRatio?: number;
    searchPrior?: number;
  }
}
