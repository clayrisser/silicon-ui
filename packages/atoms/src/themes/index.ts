import {
  base,
  bootstrap,
  bulma,
  dark,
  deep,
  funk,
  future,
  polaris,
  roboto,
  swiss,
  system,
  tailwind,
  tosh
} from '@theme-ui/presets';

base.name = 'base';
bootstrap.name = 'bootstrap';
bulma.name = 'bulma';
dark.name = 'dark';
deep.name = 'deep';
funk.name = 'funk';
future.name = 'future';
polaris.name = 'polaris';
roboto.name = 'roboto';
swiss.name = 'swiss';
system.name = 'system';
tailwind.name = 'tailwind';
tosh.name = 'tosh';

const themes: Theme[] = [
  base,
  bootstrap,
  bulma,
  dark,
  deep,
  funk,
  future,
  polaris,
  roboto,
  swiss,
  system,
  tailwind,
  tosh
].map((theme: any) => {
  theme.primaryColor = theme.colors.primary;
  return theme;
});

export interface Colors {
  background: string;
  gray: string;
  highlight: string;
  inverseText?: string;
  muted: string;
  primary: string;
  purple: string;
  secondary: string;
  text: string;
  [key: string]: string | undefined;
}

export interface FontWeights {
  body: number;
  bold: number;
  heading: number;
}

export interface Fonts {
  body: string;
  heading: string;
  monospace: string;
}

export interface LineHeights {
  body: number;
  heading: number;
}

export interface Theme {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  colors: Colors;
  fontSizes: number[];
  fontWeights: FontWeights;
  fonts: Fonts;
  lineHeights: LineHeights;
  name: string;
  primaryColor: string;
  space: number[];
}

export default themes;
