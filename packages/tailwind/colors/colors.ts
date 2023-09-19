const PALETTES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

const alphaValue = '<alpha-value>';

const generateColor = (color: string) => (
  `rgb(var(--md-sys-color-${color}) / ${alphaValue})`
)

const generatePalette = (mask: string) => {
  return PALETTES.reduce((acc, p) => {
    acc[p] = `rgb(var(${mask}${p}) / ${alphaValue})`;
    return acc;
  }, {} as Record<string, string>);
}

export const colors = {
  // Primary
  primary: {
    ...generatePalette('--md-ref-palette-primary'),
    DEFAULT: generateColor('primary'),
  },
  'on-primary': generateColor('on-primary'),
  'primary-container': generateColor('primary-container'),
  'on-primary-container': generateColor('on-primary-container'),
  // Secondary
  'secondary': {
    ...generatePalette('--md-ref-palette-secondary'),
    DEFAULT: generateColor('secondary'),
  },
  'on-secondary': generateColor('on-secondary'),
  'secondary-container': generateColor('secondary-container'),
  'on-secondary-container': generateColor('on-secondary-container'),
  // Tertiary
  'tertiary': {
    ...generatePalette('--md-ref-palette-tertiary'),
    DEFAULT: generateColor('tertiary'),
  },
  'on-tertiary': generateColor('on-tertiary'),
  'tertiary-container': generateColor('tertiary-container'),
  'on-tertiary-container': generateColor('on-tertiary-container'),
  // Error
  'error': {
    ...generatePalette('--md-ref-palette-error'),
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
  'surface': {
    DEFAULT: generateColor('surface'),
  },
  'surface-container': {
    DEFAULT: generateColor('surface-container'),
    lowest: generateColor('surface-container-lowest'),
    low: generateColor('surface-container-low'),
    high: generateColor('surface-container-high'),
    highest: generateColor('surface-container-highest'),
  },
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
  'outline': 'var(--md-ref-palette-neutral60)',
}

export type MD3Color = keyof typeof colors;

export function mixColor(mdColor1: MD3Color, percent: string, mdColor2: MD3Color) {
  const color1 = getColor(mdColor1);
  const color2 = getColor(mdColor2);
  return `color-mix(in srgb, ${color1} ${percent}, ${color2})`
}

function getColor(mdColor: MD3Color): string {
  const color = colors[mdColor];
  if (typeof color === 'string') {
    return color.replace(alphaValue, '1');
  } else {
    return color['DEFAULT'].replace(alphaValue, '1');
  }
}
