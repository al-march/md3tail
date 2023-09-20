import plugin from 'tailwindcss/plugin';
import { AddComponents } from './components';
import { md3Colors } from './colors';


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
      '--md-sys-color-surface-container-lowest': '255 255 255',
      '--md-sys-color-surface-container-low': '247 242 250',
      '--md-sys-color-surface-container': '243 237 247',
      '--md-sys-color-surface-container-high': '236 230 240',
      '--md-sys-color-surface-container-highest': '230 224 233',
      // Elevation
      '--md-sys-elevation-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
      '--md-sys-elevation-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
      '--md-sys-elevation-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
      '--md-sys-elevation-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
    },
    '[data-theme="dark"]': {
      // Surfaces
      '--md-sys-color-surface-container-lowest': '15 13 19',
      '--md-sys-color-surface-container-low': '29 27 32',
      '--md-sys-color-surface-container': '33 31 38',
      '--md-sys-color-surface-container-high': '43 41 48',
      '--md-sys-color-surface-container-highest': '54 52 59',
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
      colors: md3Colors
    }
  }
});