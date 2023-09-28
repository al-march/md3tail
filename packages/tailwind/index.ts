import plugin from 'tailwindcss/plugin';
import { FontClasses, MD3Fonts, MD3Elevations, MD3Elevation, MD3Colors, MD3Color, MD3Mix } from './theming';
import { Variables } from './theming/variables';

export { MD3Fonts, MD3Elevations, MD3Elevation, MD3Color, MD3Colors, MD3Mix };

export const md3Theme = plugin(function ({ addComponents, addBase, matchUtilities, theme }) {
  addComponents({
    ...FontClasses,
    '[data-theme="dark"]': {
      [`@apply bg-background text-on-background body-medium`]: '',
    },
    '[data-theme="light"]': {
      [`@apply bg-background text-on-background body-medium`]: '',
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
      colors: MD3Colors,
    }
  }
});