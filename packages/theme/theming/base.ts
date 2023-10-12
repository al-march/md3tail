/**
 * material 3 base colors
 */
export const COLORS = [
  'primary',
  'on-primary',
  'primary-container',
  'on-primary-container',
  'secondary',
  'on-secondary',
  'secondary-container',
  'on-secondary-container',
  'tertiary',
  'on-tertiary',
  'tertiary-container',
  'on-tertiary-container',
  'error',
  'on-error',
  'error-container',
  'on-error-container',
  'background',
  'on-background',
  'surface',
  'surface-container',
  'surface-container-lowest',
  'surface-container-low',
  'surface-container-high',
  'surface-container-highest',
  'surface-tint',
  'on-surface',
  'surface-variant',
  'on-surface-variant',
  'inverse-surface',
  'inverse-on-surface',
  'inverse-primary',
  'shadow',
  'outline-variant',
  'scrim',
  'outline',
] as const;

/**
 * State layers of colors
 * @See https://m3.material.io/foundations/interaction/states/overview
 */
export const STATES = [
  'hover',
  'press',
  'focus',
  'drag'
] as const;

/**
 * A color which has a palette
 * @See https://m3.material.io/styles/color/the-color-system/key-colors-tones
 */
export const CORE_COLORS = [
  'primary',
  'secondary',
  'tertiary',
  'error',
] as const;

/**
 * One core color becomes thirteen tones
 * @See https://m3.material.io/styles/color/the-color-system/key-colors-tones
 */
export const PALETTES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100] as const;

export type Color = typeof COLORS[number];

type State = typeof STATES[number];
type CoreColor = typeof CORE_COLORS[number];
type Palette = typeof PALETTES[number];

/**
 * Only color which has `on-` prefix
 */
type GetStatelessColors<T = Color> = T extends `on-${infer R}` ? R : never;

export type StatefullColors = GetStatelessColors<Color>;

export type MD3BaseColor = Color;
export type MD3StateColor = `${StatefullColors}-${State}`;
export type MD3PalleteColor = `${CoreColor}${Palette}`;

export type MD3Color = MD3BaseColor | MD3StateColor | MD3PalleteColor;