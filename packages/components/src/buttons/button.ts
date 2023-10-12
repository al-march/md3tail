import { MD3Elevation, MD3Fonts } from "@md3-ui/theme";
import { getColor, getState } from '../utils';
import { PluginAPI } from "tailwindcss/types/config";

export function ButtonStyles(api: PluginAPI) {
  const MD3Color = getColor(api);
  const MD3Mix = getState(api);

  return {
    ".btn": {
      ...MD3Fonts['label-large'],
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0 24px',
      borderRadius: '20px',
      lineHeight: '40px',
      transition: '0.3s ease all',


      '&-with-icon': {
        paddingLeft: '16px',
        '&:has(> *:only-child)': {
          paddingRight: '16px'
        },
      },

      '&-filled': {
        background: MD3Color('primary'),
        color: MD3Color('on-primary'),

        '&:hover': {
          background: MD3Color('primary-hover'),
          boxShadow: MD3Elevation(1),
        },
        '&:focus': {
          background: MD3Color('primary-focus'),
        },
        '&:active': {
          background: MD3Color('primary-press'),
        },
        '&:disabled': {
          background: MD3Color('on-surface', '0.12'),
          color: MD3Color('on-surface', '0.38'),
          boxShadow: 'none',
          cursor: 'not-allowed'
        }
      },

      '&-text': {
        color: MD3Color('primary'),

        '&:hover': {
          background: MD3Mix('surface-container-low', 'primary', 'hover'),
        },
        '&:focus': {
          background: MD3Mix('surface-container-low', 'primary', 'focus'),
        },
        '&:active': {
          background: MD3Mix('surface-container-low', 'primary', 'focus'),
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply cursor-not-allowed']: ''
        }
      },

      '&-outlined': {
        borderRadius: '100px',
        borderWidth: '1px',
        borderColor: MD3Color('outline'),
        color: MD3Color('primary'),
        background: 'transpatent',

        '&:hover': {
          background: MD3Mix('surface-container-low', 'primary', 'hover'),
        },
        '&:focus': {
          background: MD3Mix('surface-container-low', 'primary', 'focus'),
          borderColor: MD3Color('primary'),
        },
        '&:active': {
          background: MD3Mix('surface-container-low', 'primary', 'focus'),
        },
        '&:disabled': {
          background: 'transparent',
          color: MD3Color('on-surface', '0.38'),
          boxShadow: 'none',
          cursor: 'not-allowed',
          border: `1px solid ${MD3Color('on-surface', '0.12')}`
        }
      },

      '&-elevated': {
        boxShadow: MD3Elevation(1),
        background: MD3Color('surface-container-low'),
        color: MD3Color('primary'),

        '&:hover': {
          background: MD3Color('surface-hover'),
          boxShadow: MD3Elevation(2),
        },
        '&:focus': {
          background: MD3Color('surface-focus'),
          boxShadow: MD3Elevation(1),
        },
        '&:active': {
          background: MD3Color('surface-press'),
          boxShadow: MD3Elevation(1),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: ''
        }
      },

      '&-tonal': {
        ['@apply bg-secondary-container text-on-secondary-container']: '',
        '&:hover': {
          ['@apply elevation-1']: '',
          background: MD3Color('secondary-container-hover'),
        },
        '&:focus': {
          background: MD3Color('secondary-container-focus'),
        },
        '&:active': {
          background: MD3Color('secondary-container-press'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: '',
        }
      }
    },
  };
}