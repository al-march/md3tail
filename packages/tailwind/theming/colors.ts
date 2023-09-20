const PALETTES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

const alphaValue = '<alpha-value>';

const generateColor = (color: string) => (
  `rgb(var(--md-sys-color-${color}) / ${alphaValue})`
)

const generatePalette = (color: string) => (
  `rgb(var(--md-ref-palette-${color}) / ${alphaValue})`
)

const generatePaletteList = (mask: string) => {
  return PALETTES.reduce((acc, p) => {
    acc[p] = `rgb(var(${mask}${p}) / ${alphaValue})`;
    return acc;
  }, {} as Record<string, string>);
}

const colors = {
  // Primary
  primary: {
    ...generatePaletteList('--md-ref-palette-primary'),
    DEFAULT: generateColor('primary'),
  },
  'on-primary': generateColor('on-primary'),
  'primary-container': generateColor('primary-container'),
  'on-primary-container': generateColor('on-primary-container'),
  // Secondary
  'secondary': {
    ...generatePaletteList('--md-ref-palette-secondary'),
    DEFAULT: generateColor('secondary'),
  },
  'on-secondary': generateColor('on-secondary'),
  'secondary-container': generateColor('secondary-container'),
  'on-secondary-container': generateColor('on-secondary-container'),
  // Tertiary
  'tertiary': {
    ...generatePaletteList('--md-ref-palette-tertiary'),
    DEFAULT: generateColor('tertiary'),
  },
  'on-tertiary': generateColor('on-tertiary'),
  'tertiary-container': generateColor('tertiary-container'),
  'on-tertiary-container': generateColor('on-tertiary-container'),
  // Error
  'error': {
    ...generatePaletteList('--md-ref-palette-error'),
    DEFAULT: generateColor('error'),
  },
  'on-error': generateColor('on-error'),
  'error-container': generateColor('error-container'),
  'on-error-container': generateColor('on-error-container'),
  // Background
  'background': generateColor('background'),
  'on-background': generateColor('on-background'),
  // Surface
  // https://m3.material.io/styles/color/the-color-system/tokens
  'surface': generateColor('surface'),
  'surface-container': generateColor('surface-container'),
  'surface-container-lowest': generateColor('surface-container-lowest'),
  'surface-container-low': generateColor('surface-container-low'),
  'surface-container-high': generateColor('surface-container-high'),
  'surface-container-highest': generateColor('surface-container-highest'),
  'on-surface': generateColor('on-surface'),
  'surface-variant': generateColor('surface-variant'),
  'on-surface-variant': generateColor('on-surface-variant'),
  // Inverse
  'inverse-surface': generateColor('inverse-surface'),
  'inverse-on-surface': generateColor('inverse-on-surface'),
  'inverse-primary': generateColor('inverse-primary'),
  // Others
  'shadow': generateColor('shadow'),
  'surface-tint': generateColor('surface-tint'),
  'outline-variant': generateColor('outline-variant'),
  'scrim': generateColor('scrim'),
  'outline': generatePalette('neutral60'),
}

export type MD3Color = keyof typeof colors;

export function mixColor(mdColor1: MD3Color, mdColor2: MD3Color, percent: string) {
  const color1 = MD3Color(mdColor1);
  const color2 = MD3Color(mdColor2);
  return `color-mix(in srgb, ${color1}, ${color2} ${percent})`
}

export function MD3Color(mdColor: MD3Color, opacity = '1'): string {
  const color = colors[mdColor];
  if (typeof color === 'string') {
    return color.replace(alphaValue, opacity);
  } else {
    return color['DEFAULT'].replace(alphaValue, opacity);
  }
}

export const Md3Colors = { ...colors };
