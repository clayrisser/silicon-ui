import colorString from 'color-string';
import {
  Generator as ColorGenerator,
  Generator
} from 'contrast-color-generator';
import { score, hex } from 'wcag-contrast';

export function contrast(
  color: string,
  minimumRatio = 10,
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
  color: string,
  origionalColor: string,
  level: boolean | 'A' | 'AA' | 'AAA' = 'AA',
  minimumRatio = 21,
  hue?: number,
  brighterFirst?: boolean
): string {
  if (!level) return origionalColor;
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
