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
import { Theme } from 'theme-ui';

export interface ThemeMeta {
  theme: Theme;
  name: string;
}

const themes: ThemeMeta[] = [
  { theme: base, name: 'base' },
  { theme: bootstrap, name: 'bootstrap' },
  { theme: bulma, name: 'bulma' },
  { theme: dark, name: 'dark' },
  { theme: deep, name: 'deep' },
  { theme: funk, name: 'funk' },
  { theme: future, name: 'future' },
  { theme: polaris, name: 'polaris' },
  { theme: roboto, name: 'roboto' },
  { theme: swiss, name: 'swiss' },
  { theme: system, name: 'system' },
  { theme: tailwind, name: 'tailwind' },
  { theme: tosh, name: 'tosh' }
];

export default themes;
