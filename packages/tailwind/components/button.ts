import { PluginAPI } from "tailwindcss/types/config";
import { mixColor } from "../colors";


export const ButtonStyles = ({ theme }: PluginAPI) => {
  return {
    ".btn": {
      [`@apply bg-surface-container-low outline-none`]: '',
      padding: '0 24px',
      fontSize: '14px',
      fontWeight: theme('fontWeight.medium'),
      borderRadius: '20px',
      lineHeight: '40px',
      transition: '0.3s ease all',

      '&-text': {
        ['@apply text-primary']: '',

        '&:hover': {
          ['@apply bg-primary bg-opacity-[0.08]']: ''
        },
        '&:focus': {
          ['@apply bg-primary bg-opacity-[0.12]']: ''
        },
        '&:active': {
          ['@apply bg-primary bg-opacity-[0.12]']: ''
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply cursor-not-allowed']: ''
        }
      },

      '&-filled': {
        [`@apply bg-primary text-on-primary`]: '',

        '&:hover': {
          ['@apply elevation-1']: '',
          background: mixColor('primary', '92%', 'on-primary'),
        },
        '&:focus': {
          ['@apply elevation-0']: '',
          background: mixColor('primary', '88%', 'on-primary'),
        },
        '&:active': {
          ['@apply elevation-0']: '',
          background: mixColor('primary', '88%', 'on-primary'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: ''
        }
      },

      '&-outlined': {
        [`@apply bg-transparent text-primary border-outline`]: '',
        borderRadius: '100px',
        borderWidth: '1px',

        '&:hover': {
          ['@apply bg-primary bg-opacity-[0.08]']: ''
        },
        '&:focus': {
          ['@apply bg-primary bg-opacity-[0.12]']: ''
        },
        '&:active': {
          ['@apply bg-primary bg-opacity-[0.12]']: ''
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed border-outline border-opacity-[0.12]']: ''
        }
      },

      '&-elevated': {
        ['@apply bg-surface-container-low text-primary elevation-1']: '',

        '&:hover': {
          [`@apply bg-primary bg-opacity-[0.08] text-primary`]: '',
          boxShadow: theme('elevation.2'),
        },
        '&:focus': {
          [`@apply bg-primary bg-opacity-[0.12] text-primary`]: '',
          boxShadow: theme('elevation.1'),
        },
        '&:active': {
          [`@apply bg-primary bg-opacity-[0.12] text-primary`]: '',
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
          background: mixColor('secondary-container', '92%', 'on-secondary-container'),
        },
        '&:focus': {
          background: mixColor('secondary-container', '88%', 'on-secondary-container'),
        },
        '&:active': {
          background: mixColor('secondary-container', '88%', 'on-secondary-container'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: '',
        }
      }
    },
  }
}