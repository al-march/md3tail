import { cssTokens } from './css';

export const Theme = {
  Primary: '--md-sys-color-primary',
  OnPrimary: '--md-sys-color-on-primary',
  PrimaryContainer: '--md-sys-color-primary-container',
  OnPrimaryContainer: '--md-sys-color-on-primary-container',

  Secondary: '--md-sys-color-secondary',
  OnSecondary: '--md-sys-color-on-secondary',
  SecondaryContainer: '--md-sys-color-secondary-container',
  OnSecondaryContainer: '--md-sys-color-on-secondary-container',

  Tertiary: '--md-sys-color-tertiary',
  OnTertiary: '--md-sys-color-on-tertiary',
  TertiaryContainer: '--md-sys-color-tertiary-container',
  OnTertiaryContainer: '--md-sys-color-on-tertiary-container',

  Error: '--md-sys-color-error',
  OnError: '--md-sys-color-on-error',
  ErrorContainer: '--md-sys-color-error-container',
  OnErrorContainer: '--md-sys-color-on-error-container',

  Background: '--md-sys-color-background',
  OnBackground: '--md-sys-color-on-background',

  Surface: '--md-sys-color-surface',
  OnSurface: '--md-sys-color-on-surface',
  SurfaceVariant: '--md-sys-color-surface-variant',
  OnSurfaceVariant: '--md-sys-color-on-surface-variant',

  SurfaceContainerHighest: '--md-sys-color-surface-container-highest',
  SurfaceContainerHigh: '--md-sys-color-surface-container-high',
  SurfaceContainer: '--md-sys-color-surface-container',
  SurfaceContainerLow: '--md-sys-color-surface-container-low',
  SurfaceContainerLowest: '--md-sys-color-surface-container-lowest',
  SurfaceBright: '--md-sys-color-surface-bright',
  SurfaceDim: '--md-sys-color-surface-dim',

  Outline: '--md-sys-color-outline',
  InverseOnSurface: '--md-sys-color-inverse-on-surface',
  InverseSurface: '--md-sys-color-inverse-surface',
  InversePrimary: '--md-sys-color-inverse-primary',

  Shadow: '--md-sys-color-shadow',
  SurfaceTint: '--md-sys-color-surface-tint',
  OutlineVariant: '--md-sys-color-outline-variant',
  Scrim: '--md-sys-color-scrim',
}

type Color = keyof typeof Theme;

export enum ThemeMode {
  Dark = 'dark',
  Light = 'light',
}

type ParsedLine = {
  cssVar: string;
  cssValue: string;
}

/**
 * Generate tokens for dark & light modes
 */
export const GenerateTheme = (mode: ThemeMode) => {
  return Object.values(Theme).reduce((acc, variable) => {
    acc[variable as Color] = `var(${variable}-${mode})`;
    return acc;
  }, {} as Record<Color, string>);
}

/**
 * Update tokens from hex => rgb
 */
const regexp = {
  /** @example '--md-color: #000000;' => '--md-color' */
  var: /(--)[^\,\:\)]+/g,
  /** @example '--md-color: #000000;' => '#000000' */
  hex: /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,
  /** @example '--md-font: Roboto;' => 'Roboto' */
  value: /(?<=((--)[^\,\:\)]+: ))(.*)(?=;)/g,
}

/**
 * Parse tokens from CSS file to Map<MD3Token, MD3Color>
 * @param tokens CSS file with tokens from https://m3.material.io/theme-builder#/custom
 */
export const GenerateCSS = (tokens = cssTokens) => {
  const styles: Record<string, string> = {};
  const lines = tokens.split('\n');

  for (const line of lines) {
    try {
      const property = parseLine(line);
      if (property) {
        styles[property.cssVar] = property.cssValue;
      }
    } catch (error) {
      console.error('error:', error);
    }
  }

  return styles;
}

function parseLine(line: string): ParsedLine | null {
  /**
   * Try to get token as css variable
   */
  const [cssVar] = line.match(regexp.var) || [];
  if (cssVar) {
    const [hex] = line.match(regexp.hex) || [];
    if (hex) {
      /**
       * Tailwind wants RGB for colors
       */
      const rgb = hexToRGB(hex);
      if (rgb) {
        return { cssVar, cssValue: rgb };
      } else {
        throw new Error(`cannot parse hex: ${hex}`);
      }
    } else {
      const [cssValue] = line.match(regexp.value) || [];
      if (cssValue) {
        /**
         * Material Design 3 tokens have px at the end of font weight value.
         * Browsers dont't allow that.
         */
        if (cssVar.includes('font-weight')) {
          const fixedWeight = cssValue.replace('px', '');
          return { cssVar, cssValue: fixedWeight };
        } else {
          return { cssVar, cssValue };
        }
      } else {
        throw new Error(`cannot parse line: ${line}`);
      }
    }
  }
  return null;
}

function hexToRGB(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const rgb = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }

    return `${rgb.r} ${rgb.g} ${rgb.b}`;
  }

  return null;
}
