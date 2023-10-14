import { argbFromHex, rgbaFromArgb, themeFromSourceColor, Theme } from "@material/material-color-utilities";
import { PALETTES } from './base';
import { Elevations } from './elevations';

export enum ThemeMode {
  Dark = 'dark',
  Light = 'light',
}

export enum CoreColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Error = 'error',
  Neutral = 'neutral',
  NeutralVariant = 'neutralVariant',
}

export enum SurfacesLight {
  Surface = '',
  SurfaceContainerHighest = '--md-sys-color-surface-container-highest',
  SurfaceContainerHigh = '--md-sys-color-surface-container-high',
  SurfaceContainer = '--md-sys-color-surface-container',
  SurfaceContainerLow = '--md-sys-color-surface-container-low',
  SurfaceContainerLowest = '--md-sys-color-surface-container-lowest',
  SurfaceBright = '--md-sys-color-surface-bright',
  SurfaceDim = 87,
}

/**
 * 
 * @param source hex color
 * @returns css tokens with dark and light modes
 */
export const tokensFromSource = (source: string) => {
  const theme = themeFromSourceColor(argbFromHex(source));

  return {
    [ThemeMode.Light]: {
      ...genModTokens(theme, ThemeMode.Light),
      ...genSurfaces(theme, ThemeMode.Light),
      ...Elevations.Light,
    },
    [ThemeMode.Dark]: {
      ...genModTokens(theme, ThemeMode.Dark),
      ...genSurfaces(theme, ThemeMode.Dark),
      ...Elevations.Dark,
    },
    palettes: {
      ...genPalette(theme, CoreColor.Primary),
      ...genPalette(theme, CoreColor.Secondary),
      ...genPalette(theme, CoreColor.Tertiary),
      ...genPalette(theme, CoreColor.Error),
      ...genPalette(theme, CoreColor.Neutral),
      ...genPalette(theme, CoreColor.NeutralVariant),
    }
  };
};

function genModTokens(theme: Theme, mode: ThemeMode) {
  const scheme = theme.schemes[mode];
  const variables: Record<string, string> = {};

  Object.entries(scheme.toJSON()).forEach(([key, value]) => {
    const token = toKebabCase(key);
    const { r, g, b } = rgbaFromArgb(value);

    variables[`--md-sys-color-${token}-${mode}`] = `${r} ${g} ${b}`;
  });
  return variables;
}

/**
 * Generate palette tokens from CoreColor
 */
function genPalette(theme: Theme, color: CoreColor) {
  const palettes: Record<string, string> = {};
  const palette = theme.palettes[color];

  PALETTES.forEach(tone => {
    const variable = `--md-ref-palette-${toKebabCase(color)}${tone}`;
    const value = toRGBString(palette.tone(tone));
    palettes[variable] = value;
  });
  return palettes;
}

/** @See https://m3.material.io/styles/color/the-color-system/key-colors-tones */
const surfaceTones = {
  [ThemeMode.Light]: {
    surfaceDim: 87,
    surface: 98,
    surfaceBright: 98,
    surfaceContainerLowest: 100,
    surfaceContainerLow: 96,
    surfaceContainer: 94,
    surfaceContainerHigh: 92,
    surfaceContainerHighest: 90,
    onSurface: 10,
    onSurfaceVariant: 30,
  },
  [ThemeMode.Dark]: {
    surfaceDim: 6,
    surface: 6,
    surfaceBright: 24,
    surfaceContainerLowest: 4,
    surfaceContainerLow: 10,
    surfaceContainer: 12,
    surfaceContainerHigh: 17,
    surfaceContainerHighest: 22,
    onSurface: 90,
    onSurfaceVariant: 80,
  }
};

function genSurfaces(theme: Theme, mode: ThemeMode) {
  return Object
    .entries(surfaceTones[mode])
    .reduce((acc, [key, tone]) => {
      const variable = `--md-sys-color-${toKebabCase(key)}-${mode}`;
      const value = toRGBString(theme.palettes.neutral.tone(tone));
      acc[variable] = value;
      return acc;
    }, {} as Record<string, string>);
}

function toRGBString(color: number) {
  const { r, g, b } = rgbaFromArgb(color);
  return `${r} ${g} ${b}`;
}

function toKebabCase(key: string) {
  return key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
