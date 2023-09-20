import plugin from 'tailwindcss/plugin';
import { AddComponents } from './components';
import { Fonts, Md3Colors } from './theming';
import { Variables } from './theming/variables';


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
    ...Fonts,
    '[data-theme="dark"]': {
      [`@apply bg-background text-on-background`]: '',
    },
    '[data-theme="light"]': {
      [`@apply bg-background text-on-background`]: '',
    },
  });

  addBase({
    '[data-theme="light"]': Variables.light,
    '[data-theme="dark"]': Variables.dark,
  })

  matchUtilities(
    {
      elevation: (value) => ({
        boxShadow: value
      })
    },
    { values: theme('elevation') }
  );
}, {
  theme: {
    extend: {
      elevation,
      colors: Md3Colors,
    }
  }
});