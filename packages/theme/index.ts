import plugin from 'tailwindcss/plugin';
import { MD3ThemeConfig } from './config';

import {
  FontClasses,
  MD3Fonts,
  MD3Elevations,
  MD3Elevation,
  md3Colors,
  MD3BaseColor,
  MD3StateColor,
  MD3PalleteColor,
  MD3Color,
  alphaValue,
} from './theming';

export {
  MD3ThemeConfig,
  MD3Fonts,
  MD3Elevations,
  MD3Elevation,
  MD3BaseColor,
  MD3StateColor,
  MD3PalleteColor,
  MD3Color,
};

import { Variables } from './theming/variables';
import { GenerateTheme, ThemeMode, GenerateCSS } from './parser';


export const md3Theme = plugin.withOptions<MD3ThemeConfig | undefined>((options = {}) => {
  return function ({ addComponents, addBase, matchUtilities, theme }) {

    const getColor = (color: MD3Color): string => {
      const c = (theme(`colors.${color}`) || '') as string;
      return c.replace(alphaValue, '1');
    };

    addComponents({
      ...FontClasses,
      '[data-theme="dark"]': {
        ...MD3Fonts['body-medium'],
        background: getColor('background'),
        color: getColor('on-background'),
        ...GenerateTheme(ThemeMode.Dark),
      },
      '[data-theme="light"]': {
        ...MD3Fonts['body-medium'],
        background: getColor('background'),
        color: getColor('on-background'),
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
  };
}, (options = {}) => {
  return {
    theme: {
      extend: {
        elevation: MD3Elevations,
        colors: {
          ...md3Colors(options),
        },
      }
    },
    md3Options: options
  };
});