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
  muted: string;
  primary: string;
  purple: string;
  secondary: string;
  text: string;
  [key: string]: string;
}

export interface Theme {
  name: string;
  primaryColor: string;
  colors: Colors;
}

export default themes;
