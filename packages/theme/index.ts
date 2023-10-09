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

type md3ThemeOptions = {
  /**
   * CSS tokens from Material Design 3
   */
  tokens?: string;
}

export const md3Theme = plugin.withOptions<md3ThemeOptions | undefined>((options) => {

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
        ...GenerateCSS(options?.tokens || undefined),
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
}, () => {
  return {
    theme: {
      extend: {
        elevation: MD3Elevations,
        colors: MD3Colors,
      }
    }
  }
});