import plugin from 'tailwindcss/plugin';
import { MD3ThemeConfig } from './config';

import {
  MD3Fonts,
  MD3Elevations,
  MD3Elevation,
  md3Colors,
  MD3BaseColor,
  MD3StateColor,
  MD3PalleteColor,
  MD3Color,
  alphaValue,
  tokensFromSource,
  MD3FontTokens,
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

const SOURCE = '#6750A4';

export const md3Theme = plugin.withOptions<MD3ThemeConfig | undefined>((options = {}) => {
  return function ({ addComponents, addBase, matchUtilities, theme }) {
    const tokens = tokensFromSource(options?.source || SOURCE);

    const getColor = (color: MD3Color): string => {
      const c = (theme(`colors.${color}`) || '') as string;
      return c.replace(alphaValue, '1');
    };

    addComponents({
      ...MD3Fonts,
      '[data-theme="dark"]': {
        ...MD3Fonts['body-medium'],
        background: getColor('background'),
        color: getColor('on-background'),
        ...tokens.dark,
      },
      '[data-theme="light"]': {
        ...MD3Fonts['body-medium'],
        background: getColor('background'),
        color: getColor('on-background'),
        ...tokens.light,
      },
    });

    addBase({
      ':root': {
        ...MD3FontTokens,
        ...tokens.palettes,
      }
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