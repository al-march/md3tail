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

export type md3ThemeOptions = {
  /**
   * CSS tokens from Material Design 3
   */
  tokens?: string;
  colors?: Record<string, string>;
  stateLayers?: {
    hover?: number;
    press?: number;
    focus?: number;
    drag?: number;
  };
};

const stateColors = ['primary', 'secondary', 'tertiary', 'error', 'surface'] as const;

function generateStateLayers(
  colors = stateColors,
  stateLayers: md3ThemeOptions['stateLayers'] = {},
) {
  const states: Record<string, string> = {};

  colors.forEach((color) => {
    const onColor = MD3Color(`on-${color}`);
    if (onColor) {
      states[`${color}-hover`] = MD3Mix(color, `on-${color}` as MD3Color, stateLayers.hover || '8%');
      states[`${color}-press`] = MD3Mix(color, `on-${color}` as MD3Color, stateLayers.press || '10%');
      states[`${color}-focus`] = MD3Mix(color, `on-${color}` as MD3Color, stateLayers.focus || '10%');
      states[`${color}-drag`] = MD3Mix(color, `on-${color}` as MD3Color, stateLayers.drag || '16%');
    }
  });

  return states;
}

export const md3Theme = plugin.withOptions<md3ThemeOptions | undefined>((options = {}) => {
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
  };
}, (options = {}) => {
  return {
    theme: {
      extend: {
        elevation: MD3Elevations,
        colors: {
          ...MD3Colors,
          ...generateStateLayers(stateColors, options?.stateLayers)
        },
      }
    }
  };
});