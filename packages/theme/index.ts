import {
  FontClasses,
  MD3Fonts,
  MD3Elevations,
  MD3Elevation,
  MD3Colors,
  MD3Color,
  MD3Mix
} from './theming';

export {
  MD3Fonts,
  MD3Elevations,
  MD3Elevation,
  MD3Color,
  MD3Colors,
  MD3Mix
};

import plugin from 'tailwindcss/plugin';
import { Variables } from './theming/variables';
import { GenerateTheme, ThemeMode, GenerateCSS } from './parser';

export const md3Theme = plugin.withOptions(options => {
  return function ({ addComponents, addBase, matchUtilities, theme }) {
    addComponents({
      ...FontClasses,
      '[data-theme="dark"]': {
        ...MD3Fonts['body-medium'],
        background: MD3Color('background'),
        color: MD3Color('on-background'),
        ...GenerateTheme(ThemeMode.Dark),
      },
      '[data-theme="light"]': {
        ...MD3Fonts['body-medium'],
        background: MD3Color('background'),
        color: MD3Color('on-background'),
        ...GenerateTheme(ThemeMode.Light),
      },
    });

    addBase({
      ':root': {
        ...GenerateCSS(),
      },
      '[data-theme="light"]': Variables.Light,
      '[data-theme="dark"]': Variables.Dark,
    });

    matchUtilities({
      elevation: (value) => ({
        boxShadow: value
      })
    }, {
      values: theme('elevation')
    });
  }
}, (options) => {
  return {
    theme: {
      extend: {
        elevation: MD3Elevations,
        colors: MD3Colors,
      }
    }
  }
});