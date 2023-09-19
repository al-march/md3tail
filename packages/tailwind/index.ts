import plugin from 'tailwindcss/plugin';
import { AddComponents } from './components';
import { colors } from './colors';


/** @See https://www.figma.com/file/zPA2BySKG8bW0LTD5LFYNo/Material-3-Design-Kit-(Community) */
const elevation = {
  0: 'none',
  1: 'var(--md-sys-elevation-1)',
  2: 'var(--md-sys-elevation-2)',
  3: 'var(--md-sys-elevation-3)',
  4: 'var(--md-sys-elevation-4)',
  5: 'var(--md-sys-elevation-5)',
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
      colors
    }
  }
});