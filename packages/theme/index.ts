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
  MD3FontTokens,
  alphaValue,
  TokensFromSource,
  tokensFromSource,
  FontClasses,
  PALETTES
} from './theming';

export {
  TokensFromSource,
  tokensFromSource,
  MD3ThemeConfig,
  MD3Fonts,
  MD3Elevations,
  MD3Elevation,
  MD3BaseColor,
  MD3StateColor,
  MD3PalleteColor,
  MD3Color,
  PALETTES,
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
        '--md-sys-color-primary': 'var(--md-sys-color-primary-dark)',
        '--md-sys-color-on-primary': 'var(--md-sys-color-on-primary-dark)',
        '--md-sys-color-primary-container': 'var(--md-sys-color-primary-container-dark)',
        '--md-sys-color-on-primary-container': 'var(--md-sys-color-on-primary-container-dark)',
        '--md-sys-color-secondary': 'var(--md-sys-color-secondary-dark)',
        '--md-sys-color-on-secondary': 'var(--md-sys-color-on-secondary-dark)',
        '--md-sys-color-secondary-container': 'var(--md-sys-color-secondary-container-dark)',
        '--md-sys-color-on-secondary-container': 'var(--md-sys-color-on-secondary-container-dark)',
        '--md-sys-color-tertiary': 'var(--md-sys-color-tertiary-dark)',
        '--md-sys-color-on-tertiary': 'var(--md-sys-color-on-tertiary-dark)',
        '--md-sys-color-tertiary-container': 'var(--md-sys-color-tertiary-container-dark)',
        '--md-sys-color-on-tertiary-container': 'var(--md-sys-color-on-tertiary-container-dark)',
        '--md-sys-color-error': 'var(--md-sys-color-error-dark)',
        '--md-sys-color-on-error': 'var(--md-sys-color-on-error-dark)',
        '--md-sys-color-error-container': 'var(--md-sys-color-error-container-dark)',
        '--md-sys-color-on-error-container': 'var(--md-sys-color-on-error-container-dark)',
        '--md-sys-color-outline': 'var(--md-sys-color-outline-dark)',
        '--md-sys-color-background': 'var(--md-sys-color-background-dark)',
        '--md-sys-color-on-background': 'var(--md-sys-color-on-background-dark)',
        '--md-sys-color-surface': 'var(--md-sys-color-surface-dark)',
        '--md-sys-color-surface-dim': 'var(--md-sys-color-surface-dim-dark)',
        '--md-sys-color-surface-bright': 'var(--md-sys-color-surface-bright-dark)',
        '--md-sys-color-surface-container-lowest': 'var(--md-sys-color-surface-container-lowest-dark)',
        '--md-sys-color-surface-container-low': 'var(--md-sys-color-surface-container-low-dark)',
        '--md-sys-color-surface-container': 'var(--md-sys-color-surface-container-dark)',
        '--md-sys-color-surface-container-high': 'var(--md-sys-color-surface-container-high-dark)',
        '--md-sys-color-surface-container-highest': 'var(--md-sys-color-surface-container-highest-dark)',
        '--md-sys-color-on-surface': 'var(--md-sys-color-on-surface-dark)',
        '--md-sys-color-on-surface-variant': 'var(--md-sys-color-on-surface-variant-dark)',
        '--md-sys-color-surface-variant': 'var(--md-sys-color-surface-variant-dark)',
        '--md-sys-color-inverse-surface': 'var(--md-sys-color-inverse-surface-dark)',
        '--md-sys-color-inverse-on-surface': 'var(--md-sys-color-inverse-on-surface-dark)',
        '--md-sys-color-inverse-primary': 'var(--md-sys-color-inverse-primary-dark)',
        '--md-sys-color-shadow': 'var(--md-sys-color-shadow-dark)',
        '--md-sys-color-surface-tint': 'var(--md-sys-color-surface-tint-dark)',
        '--md-sys-color-outline-variant': 'var(--md-sys-color-outline-variant-dark)',
        '--md-sys-color-scrim': 'var(--md-sys-color-scrim-dark)',
      },
      '[data-theme="light"]': {
        ...MD3Fonts['body-medium'],
        background: getColor('background'),
        color: getColor('on-background'),
        '--md-sys-color-primary': 'var(--md-sys-color-primary-light)',
        '--md-sys-color-on-primary': 'var(--md-sys-color-on-primary-light)',
        '--md-sys-color-primary-container': 'var(--md-sys-color-primary-container-light)',
        '--md-sys-color-on-primary-container': 'var(--md-sys-color-on-primary-container-light)',
        '--md-sys-color-secondary': 'var(--md-sys-color-secondary-light)',
        '--md-sys-color-on-secondary': 'var(--md-sys-color-on-secondary-light)',
        '--md-sys-color-secondary-container': 'var(--md-sys-color-secondary-container-light)',
        '--md-sys-color-on-secondary-container': 'var(--md-sys-color-on-secondary-container-light)',
        '--md-sys-color-tertiary': 'var(--md-sys-color-tertiary-light)',
        '--md-sys-color-on-tertiary': 'var(--md-sys-color-on-tertiary-light)',
        '--md-sys-color-tertiary-container': 'var(--md-sys-color-tertiary-container-light)',
        '--md-sys-color-on-tertiary-container': 'var(--md-sys-color-on-tertiary-container-light)',
        '--md-sys-color-error': 'var(--md-sys-color-error-light)',
        '--md-sys-color-on-error': 'var(--md-sys-color-on-error-light)',
        '--md-sys-color-error-container': 'var(--md-sys-color-error-container-light)',
        '--md-sys-color-on-error-container': 'var(--md-sys-color-on-error-container-light)',
        '--md-sys-color-outline': 'var(--md-sys-color-outline-light)',
        '--md-sys-color-background': 'var(--md-sys-color-background-light)',
        '--md-sys-color-on-background': 'var(--md-sys-color-on-background-light)',
        '--md-sys-color-surface': 'var(--md-sys-color-surface-light)',
        '--md-sys-color-surface-dim': 'var(--md-sys-color-surface-dim-light)',
        '--md-sys-color-surface-bright': 'var(--md-sys-color-surface-bright-light)',
        '--md-sys-color-surface-container-lowest': 'var(--md-sys-color-surface-container-lowest-light)',
        '--md-sys-color-surface-container-low': 'var(--md-sys-color-surface-container-low-light)',
        '--md-sys-color-surface-container': 'var(--md-sys-color-surface-container-light)',
        '--md-sys-color-surface-container-high': 'var(--md-sys-color-surface-container-high-light)',
        '--md-sys-color-surface-container-highest': 'var(--md-sys-color-surface-container-highest-light)',
        '--md-sys-color-on-surface': 'var(--md-sys-color-on-surface-light)',
        '--md-sys-color-on-surface-variant': 'var(--md-sys-color-on-surface-variant-light)',
        '--md-sys-color-surface-variant': 'var(--md-sys-color-surface-variant-light)',
        '--md-sys-color-inverse-surface': 'var(--md-sys-color-inverse-surface-light)',
        '--md-sys-color-inverse-on-surface': 'var(--md-sys-color-inverse-on-surface-light)',
        '--md-sys-color-inverse-primary': 'var(--md-sys-color-inverse-primary-light)',
        '--md-sys-color-shadow': 'var(--md-sys-color-shadow-light)',
        '--md-sys-color-surface-tint': 'var(--md-sys-color-surface-tint-light)',
        '--md-sys-color-outline-variant': 'var(--md-sys-color-outline-variant-light)',
        '--md-sys-color-scrim': 'var(--md-sys-color-scrim-light)',
      },
    });

    addBase({
      ':root': {
        ...MD3FontTokens,
        ...tokens['light'],
        ...tokens['dark'],
        ...tokens.palettes,
      },
      ...FontClasses
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
    md3Options: options,
  };
});