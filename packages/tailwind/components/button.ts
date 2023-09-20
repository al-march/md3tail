import { mixColor, md3Colors, getColor } from "../colors";
import { PluginAPI } from "tailwindcss/types/config";

export const ButtonStyles = ({ theme }: PluginAPI) => {
  return {
    ".btn": {
      [`@apply outline-none`]: '',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0 24px',
      fontSize: '14px',
      fontWeight: theme('fontWeight.medium'),
      borderRadius: '20px',
      lineHeight: '40px',
      transition: '0.3s ease all',

      '&-filled': {
        background: getColor('primary'),
        color: getColor('on-primary'),

        '&:hover': {
          background: mixColor('primary', 'on-primary', '8%'),
          boxShadow: theme('elevation.1')
        },
        '&:focus': {
          background: mixColor('primary', 'on-primary', '12%'),
        },
        '&:active': {
          background: mixColor('primary', 'on-primary', '12%'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: ''
        }
      },

      '&-text': {
        ['@apply text-primary']: '',

        '&:hover': {
          background: mixColor('surface-container-low', 'primary', '8%'),
        },
        '&:focus': {
          background: mixColor('surface-container-low', 'primary', '12%'),
        },
        '&:active': {
          background: mixColor('surface-container-low', 'primary', '12%'),
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply cursor-not-allowed']: ''
        }
      },

      '&-outlined': {
        [`@apply bg-transparent text-primary border-outline`]: '',
        borderRadius: '100px',
        borderWidth: '1px',

        '&:hover': {
          background: mixColor('surface-container-low', 'primary', '8%'),
        },
        '&:focus': {
          background: mixColor('surface-container-low', 'primary', '12%'),
        },
        '&:active': {
          background: mixColor('surface-container-low', 'primary', '12%'),
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed border-outline border-opacity-[0.12]']: ''
        }
      },

      '&-elevated': {
        ['@apply bg-surface-container-low text-primary elevation-1']: '',

        '&:hover': {
          background: mixColor('surface-container-low', 'primary', '8%'),
          boxShadow: theme('elevation.2'),
        },
        '&:focus': {
          background: mixColor('surface-container-low', 'primary', '12%'),
          boxShadow: theme('elevation.1'),
        },
        '&:active': {
          background: mixColor('surface-container-low', 'primary', '12%'),
          boxShadow: theme('elevation.1'),
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
          background: mixColor('secondary-container', 'on-secondary-container', '8%'),
        },
        '&:focus': {
          background: mixColor('secondary-container', 'on-secondary-container', '12%'),
        },
        '&:active': {
          background: mixColor('secondary-container', 'on-secondary-container', '12%'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: '',
        }
      }
    },
  }
}