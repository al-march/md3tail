const PALETTES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100] as const;

const alphaValue = '<alpha-value>';

const color = <T extends string>(color: T): `rgb(var(--md-sys-color-${T}) / ${typeof alphaValue})` => (
  `rgb(var(--md-sys-color-${color}) / ${alphaValue})`
);

const palette = <T extends string>(color: T) => (
  `rgb(var(--md-ref-palette-${color}) / ${alphaValue})`
);

const paletteList = <T extends string>(color: T) => {
  type Key = `${T}-${typeof PALETTES[number]}`;

  return PALETTES.reduce((acc, p) => {
    acc[`${color}-${p}`] = `rgb(var(--md-ref-palette-${color}${p}) / ${alphaValue})`;
    return acc;
  }, {} as Record<Key, string>);
};

const colors = {
  // Primary
  'primary': color('primary'),
  ...paletteList('primary'),
  'on-primary': color('on-primary'),
  'primary-container': color('primary-container'),
  'on-primary-container': color('on-primary-container'),
  // Secondary
  'secondary': color('secondary'),
  ...paletteList('secondary'),
  'on-secondary': color('on-secondary'),
  'secondary-container': color('secondary-container'),
  'on-secondary-container': color('on-secondary-container'),
  // Tertiary
  'tertiary': color('tertiary'),
  ...paletteList('tertiary'),
  'on-tertiary': color('on-tertiary'),
  'tertiary-container': color('tertiary-container'),
  'on-tertiary-container': color('on-tertiary-container'),
  // Error
  'error': color('error'),
  ...paletteList('error'),
  'on-error': color('on-error'),
  'error-container': color('error-container'),
  'on-error-container': color('on-error-container'),
  // Background
  'background': color('background'),
  'on-background': color('on-background'),
  // Surface
  // https://m3.material.io/styles/color/the-color-system/tokens
  'surface': color('surface'),
  'surface-container': color('surface-container'),
  'surface-container-lowest': color('surface-container-lowest'),
  'surface-container-low': color('surface-container-low'),
  'surface-container-high': color('surface-container-high'),
  'surface-container-highest': color('surface-container-highest'),
  'on-surface': color('on-surface'),
  'surface-variant': color('surface-variant'),
  'on-surface-variant': color('on-surface-variant'),
  // Inverse
  'inverse-surface': color('inverse-surface'),
  'inverse-on-surface': color('inverse-on-surface'),
  'inverse-primary': color('inverse-primary'),
  // Others
  'shadow': color('shadow'),
  'surface-tint': color('surface-tint'),
  'outline-variant': color('outline-variant'),
  'scrim': color('scrim'),
  'outline': palette('neutral60'),
} as const;

export type MD3Color = keyof typeof colors;

export function MD3Mix(mdColor1: MD3Color, mdColor2: MD3Color, percent: string | number) {
  const color1 = MD3Color(mdColor1);
  const color2 = MD3Color(mdColor2);

  return `color-mix(in srgb, ${color1}, ${color2} ${getPercent(percent)})`;

  function getPercent(percent: string | number) {
    if (typeof percent === 'number') {
      return `${percent * 100}%`;
    } else {
      return percent;
    }
  }
}

export function MD3Color(mdColor: MD3Color, opacity = '1'): string {
  return colors[mdColor].replace(alphaValue, opacity);
}

export const MD3Colors = { ...colors };
