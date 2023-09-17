import plugin from 'tailwindcss/plugin';
import { AddComponents } from './components';

const PALETTES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

/** @See https://material-components.github.io/material-components-web-catalog/#/component/elevation */
const elevation = {
  0: '0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12);',
  1: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);',
  2: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);',
  3: '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);',
  4: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);',
  5: '0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);',
  6: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);',
  7: '0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12);',
  8: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);',
  9: '0 5px 6px -3px rgba(0,0,0,.2), 0 9px 12px 1px rgba(0,0,0,.14), 0 3px 16px 2px rgba(0,0,0,.12);',
  10: '0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);'
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
      '--md-sys-color-surface-container-lowest': '#FFFFFF',
      '--md-sys-color-surface-container-low': '#F7F2FA',
      '--md-sys-color-surface-container': '#F3EDF7',
      '--md-sys-color-surface-container-high': '#ECE6F0',
      '--md-sys-color-surface-container-highest': '#E6E0E9',
    },
    '[data-theme="dark"]': {
      '--md-sys-color-surface-container-lowest': '#0F0D13',
      '--md-sys-color-surface-container-low': '#1D1B20',
      '--md-sys-color-surface-container': '#211F26',
      '--md-sys-color-surface-container-high': '#2B2930',
      '--md-sys-color-surface-container-highest': '#36343B',
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
          DEFAULT: 'var(--md-sys-color-primary)',
        },
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        // Secondary
        'secondary': {
          ...generatePalette('--md-ref-palette-secondary'),
          DEFAULT: 'var(--md-sys-color-secondary)',
        },
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        // Tertiary
        'tertiary': {
          ...generatePalette('--md-ref-palette-tertiary'),
          DEFAULT: 'var(--md-sys-color-tertiary)',
        },
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        // Error
        'error': {
          ...generatePalette('--md-ref-palette-error'),
          DEFAULT: 'var(--md-sys-color-error)',
        },
        'on-error': 'var(--md-sys-color-on-error)',
        'error-container': 'var(--md-sys-color-error-container)',
        'on-error-container': 'var(--md-sys-color-on-error-container)',
        // Background
        'background': 'var(--md-sys-color-background)',
        'on-background': 'var(--md-sys-color-on-background)',
        // Surface
        // https://m3.material.io/styles/color/the-color-system/tokens
        'surface': {
          DEFAULT: 'var(--md-sys-color-surface)',
        },
        'surface-container': {
          DEFAULT: 'var(--md-sys-color-surface-container)',
          lowest: 'var(--md-sys-color-surface-container-lowest)',
          low: 'var(--md-sys-color-surface-container-low)',
          high: 'var(--md-sys-color-surface-container-high)',
          highest: 'var(--md-sys-color-surface-container-highest)',
        },
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        // Inverse
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
        // Others
        'shadow': 'var(--md-sys-color-shadow)',
        'surface-tint': 'var(--md-sys-color-surface-tint)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',
        'scrim': 'var(--md-sys-color-scrim)',
      }
    }
  }
});
