import { MD3Elevation, MD3Fonts } from "@md3-ui/theme";
import { Var, getColor, getState } from '../utils';
import { PluginAPI } from "tailwindcss/types/config";

enum Vars {
  Color = '--md-button-color',
  Background = '--md-button-background',
  BorderWidth = '--md-button-border-width',
  BorderColor = '--md-button-border-color',
  BorderStyle = '--md-button-border-style',
  BorderRadius = '--md-button-border-radius',
  Shadow = '--md-button-shadow',
}

export function ButtonStyles(api: PluginAPI) {
  const MD3Color = getColor(api);
  const MD3Mix = getState(api);

  return {
    ".btn": {
      [Vars.Color]: MD3Color('primary'),
      [Vars.Background]: 'transparent',
      [Vars.BorderColor]: 'transparent',
      [Vars.BorderWidth]: '1px',
      [Vars.BorderStyle]: 'solid',
      [Vars.BorderRadius]: '20px',
      [Vars.Shadow]: 'none',

      ...MD3Fonts['label-large'],
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0 24px',
      lineHeight: `calc(40px - ${Var(Vars.BorderWidth)} * 2)`,
      transition: '0.3s ease all',

      boxShadow: Var(Vars.Shadow),
      color: Var(Vars.Color),
      background: Var(Vars.Background),
      borderWidth: Var(Vars.BorderWidth),
      borderColor: Var(Vars.BorderColor),
      borderStyle: Var(Vars.BorderStyle),
      borderRadius: Var(Vars.BorderRadius),

      '&-with-icon': {
        paddingLeft: '16px',
        '&:has(> *:only-child)': {
          paddingRight: '16px'
        },
      },

      '&-filled': {
        [Vars.Background]: MD3Color('primary'),
        [Vars.Color]: MD3Color('on-primary'),

        '&:hover': {
          [Vars.Background]: MD3Color('primary-hover'),
          [Vars.Shadow]: MD3Elevation(1),
        },
        '&:focus': {
          [Vars.Background]: MD3Color('primary-focus'),
        },
        '&:active': {
          [Vars.Background]: MD3Color('primary-press'),
        },
        '&:disabled': {
          [Vars.Background]: MD3Color('on-surface', '0.12'),
          [Vars.Color]: MD3Color('on-surface', '0.38'),
          [Vars.Shadow]: 'none',
          cursor: 'not-allowed'
        }
      },

      '&-text': {
        '&:hover': {
          [Vars.Background]: MD3Mix('surface-container-low', 'primary', 'hover'),
        },
        '&:focus': {
          [Vars.Background]: MD3Mix('surface-container-low', 'primary', 'focus'),
        },
        '&:active': {
          [Vars.Background]: MD3Mix('surface-container-low', 'primary', 'focus'),
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply cursor-not-allowed']: ''
        }
      },

      '&-outlined': {
        [Vars.BorderColor]: MD3Color('outline'),
        [Vars.Background]: 'transpatent',
        [Vars.BorderRadius]: '100px',

        '&:hover': {
          [Vars.Background]: MD3Mix('surface-container-low', 'primary', 'hover'),
        },
        '&:focus': {
          [Vars.Background]: MD3Mix('surface-container-low', 'primary', 'focus'),
          [Vars.BorderColor]: MD3Color('primary'),
        },
        '&:active': {
          [Vars.Background]: MD3Mix('surface-container-low', 'primary', 'focus'),
        },
        '&:disabled': {
          [Vars.Background]: 'transparent',
          [Vars.Color]: MD3Color('on-surface', '0.38'),
          [Vars.BorderColor]: MD3Color('on-surface', '0.12'),
          [Vars.Shadow]: 'none',
          cursor: 'not-allowed',
        }
      },

      '&-elevated': {
        [Vars.Shadow]: MD3Elevation(1),
        [Vars.Background]: MD3Color('surface-container-low'),

        '&:hover': {
          [Vars.Background]: MD3Color('surface-hover'),
          [Vars.Shadow]: MD3Elevation(2),
        },
        '&:focus': {
          [Vars.Background]: MD3Color('surface-focus'),
          [Vars.Shadow]: MD3Elevation(1),
        },
        '&:active': {
          [Vars.Background]: MD3Color('surface-press'),
          [Vars.Shadow]: MD3Elevation(1),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: ''
        }
      },

      '&-tonal': {
        [Vars.Background]: MD3Color('secondary-container'),
        [Vars.Color]: MD3Color('on-secondary-container'),

        '&:hover': {
          [Vars.Background]: MD3Color('secondary-container-hover'),
          [Vars.Shadow]: MD3Elevation(1),
        },
        '&:focus': {
          [Vars.Background]: MD3Color('secondary-container-focus'),
        },
        '&:active': {
          [Vars.Background]: MD3Color('secondary-container-press'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: '',
        }
      }
    },
  };
}