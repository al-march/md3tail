import plugin from 'tailwindcss/plugin';
import { AddComponents } from './components';

const PALETTES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

/** @See https://www.figma.com/file/zPA2BySKG8bW0LTD5LFYNo/Material-3-Design-Kit-(Community) */
const elevation = {
  0: 'none',
  1: 'var(--md-sys-elevation-1)',
  2: 'var(--md-sys-elevation-2)',
  3: 'var(--md-sys-elevation-3)',
  4: 'var(--md-sys-elevation-4)',
  5: 'var(--md-sys-elevation-5)',
}

const generatePalette = (mask: string) => {
  return PALETTES.reduce((acc, p) => {
    acc[p] = `${mask}${p}`;
    return acc;
  }, {} as Record<string, string>);
}

export const md3Theme = plugin(function ({ addComponents, addBase, matchUtilities, theme }) {
  addComponents({
    ...AddComponents(theme),
    '[data-theme="dark"]': {
      [`@apply bg-background text-on-background`]: '',
    },
    '[data-theme="light"]': {
      [`@apply bg-background text-on-background`]: '',
    },
  });

  addBase({
    ':root': {
      // Surfaces
      '--md-sys-color-surface-container-lowest': '#FFFFFF',
      '--md-sys-color-surface-container-low': '#F7F2FA',
      '--md-sys-color-surface-container': '#F3EDF7',
      '--md-sys-color-surface-container-high': '#ECE6F0',
      '--md-sys-color-surface-container-highest': '#E6E0E9',
      // Elevation
      '--md-sys-elevation-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
      '--md-sys-elevation-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
      '--md-sys-elevation-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
    },
    '[data-theme="dark"]': {
      // Surfaces
      '--md-sys-color-surface-container-lowest': '#0F0D13',
      '--md-sys-color-surface-container-low': '#1D1B20',
      '--md-sys-color-surface-container': '#211F26',
      '--md-sys-color-surface-container-high': '#2B2930',
      '--md-sys-color-surface-container-highest': '#36343B',
      // Elevation
      '--md-sys-elevation-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
    }
  })

  matchUtilities(
    {
      elevation: (value) => ({
        boxShadow: value
      })
    },
    { values: theme('elevation') }
  )
}, {
  theme: {
    extend: {
      elevation,
      colors: {
        // Primary
        'primary': {
          ...generatePalette('--md-ref-palette-primary'),
          DEFAULT: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
        },
        'on-primary': 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
        'primary-container': 'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
        'on-primary-container': 'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
        // Secondary
        'secondary': {
          ...generatePalette('--md-ref-palette-secondary'),
          DEFAULT: 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
        },
        'on-secondary': 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
        'secondary-container': 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
        'on-secondary-container': 'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
        // Tertiary
        'tertiary': {
          ...generatePalette('--md-ref-palette-tertiary'),
          DEFAULT: 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
        },
        'on-tertiary': 'rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)',
        'tertiary-container': 'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
        'on-tertiary-container': 'rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)',
        // Error
        'error': {
          ...generatePalette('--md-ref-palette-error'),
          DEFAULT: 'rgb(var(--md-sys-color-error) / <alpha-value>)',
        },
        'on-error': 'rgb(var(--md-sys-color-on-error) / <alpha-value>)',
        'error-container': 'rgb(var(--md-sys-color-error-container) / <alpha-value>)',
        'on-error-container': 'rgb(var(--md-sys-color-on-error-container) / <alpha-value>)',
        // Background
        'background': 'rgb(var(--md-sys-color-background) / <alpha-value>)',
        'on-background': 'rgb(var(--md-sys-color-on-background) / <alpha-value>)',
        // Surface
        // https://m3.material.io/styles/color/the-color-system/tokens
        'surface': {
          DEFAULT: 'rgb(var(--md-sys-color-surface) / <alpha-value>)',
        },
        'surface-container': {
          DEFAULT: 'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
          lowest: 'rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)',
          low: 'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',
          high: 'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
          highest: 'rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)',
        },
        'on-surface': 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
        'surface-variant': 'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
        // Inverse
        'inverse-surface': 'rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)',
        'inverse-on-surface': 'rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)',
        'inverse-primary': 'rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)',
        // Others
        'shadow': 'rgb(var(--md-sys-color-shadow) / <alpha-value>)',
        'surface-tint': 'rgb(var(--md-sys-color-surface-tint) / <alpha-value>)',
        'outline-variant': 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
        'scrim': 'rgb(var(--md-sys-color-scrim) / <alpha-value>)',
      }
    }
  }
});
