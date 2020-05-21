import colorString from 'color-string';
import { score, hex } from 'wcag-contrast';
import { useState, useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import {
  Generator as ColorGenerator,
  Generator
} from 'contrast-color-generator';
import { Theme } from '../themes';

export default function useColor(props: any): string {
  const theme: Theme = useTheme();
  const [color, setColor] = useState(props.color as string);

  useEffect(() => {
    setColor(
      autoContrast(
        typeof props.backgroundColor !== 'undefined'
          ? theme.colors[props.backgroundColor as string] ||
              (props.backgroundColor as string)
          : null,
        theme.colors.inverseText || theme.colors.text,
        typeof props.autoContrast === 'undefined'
          ? theme.autoContrast
          : props.autoContrast
      )
    );
  }, []);

  return color;
}

export function contrast(
  color: string,
  minimumRatio = 21,
  hue = 180,
  brighterFirst = true
): string {
  const generator = new ColorGenerator(hue, {
    minimumRatio,
    searchPrior: brighterFirst
      ? Generator.BRIGHTER_FIRST
      : Generator.DARKER_FIRST
  });
  return generator.generate(toHex(color)).hexStr;
}

export function autoContrast(
  color: string | null,
  origionalColor: string,
  level: boolean | 'A' | 'AA' | 'AAA' = false,
  minimumRatio = 10,
  hue?: number,
  brighterFirst?: boolean
): string {
  if (!level || !color) return origionalColor;
  const scoreResult = score(hex(toHex(color), toHex(origionalColor)));
  if (
    scoreResult !== 'Fail' &&
    scoreResult.length > (level === true ? 2 : level.length)
  ) {
    return origionalColor;
  }
  try {
    return contrast(color, minimumRatio, hue, brighterFirst);
  } catch (err) {
    if (err.message === 'No color exist which satisfies a requirement.') {
      if (!minimumRatio) return origionalColor;
      return autoContrast(
        color,
        origionalColor,
        level,
        minimumRatio - 1,
        hue,
        brighterFirst
      );
    }
    throw err;
  }
}

export function toHex(color: string): string {
  return colorString.to
    .hex(colorString.get(color)?.value || [0, 0, 0])
    .substr(0, 7);
}
