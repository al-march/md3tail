import plugin from 'tailwindcss/plugin';
import { Components } from './components';
import { FontClasses, MD3Elevations, Md3Colors } from './theming';
import { Variables } from './theming/variables';

export const md3Theme = plugin(function ({ addComponents, addBase, matchUtilities, theme }) {
  addComponents({
    ...Components(),
    ...FontClasses,
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
      elevation: MD3Elevations,
      colors: Md3Colors,
    }
  }
});