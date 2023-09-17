import { PluginAPI } from "tailwindcss/types/config";


export const ButtonStyles = ({ theme }: PluginAPI) => {
  return {
    ".btn": {
      [`@apply transition-all bg-surface-container-low outline-none`]: '',
      padding: '0 24px',
      fontSize: '14px',
      fontWeight: theme('fontWeight.medium'),
      borderRadius: '20px',
      lineHeight: '40px',

      '&-text': {
        ['@apply text-primary']: '',

        '&:hover': {
          ['@apply bg-primary/[0.08]']: ''
        },
        '&:focus': {
          ['@apply bg-primary/[0.12]']: ''
        },
        '&:active': {
          ['@apply bg-primary/[0.12]']: ''
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply cursor-not-allowed']: ''
        }
      },

      '&-filled': {
        [`@apply bg-primary text-on-primary`]: '',

        '&:hover': {
          ['@apply bg-primary bg-opacity-[0.92] elevation-1']: ''
        },
        '&:focus': {
          ['@apply bg-primary bg-opacity-[0.88] elevation-0']: ''
        },
        '&:active': {
          ['@apply bg-primary bg-opacity-[0.88] elevation-0']: ''
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
          ['@apply bg-primary/[0.08]']: ''
        },
        '&:focus': {
          ['@apply bg-primary/[0.12]']: ''
        },
        '&:active': {
          ['@apply bg-primary/[0.12]']: ''
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed border-outline/[0.12]']: ''
        }
      },

      '&-elevated': {
        ['@apply text-primary elevation-1']: '',

        '&:hover': {
          [`@apply bg-primary/[0.08] text-primary`]: '',
          boxShadow: theme('elevation.2'),
        },
        '&:focus': {
          [`@apply bg-primary/[0.12] text-primary`]: '',
          boxShadow: theme('elevation.1'),
        },
        '&:active': {
          [`@apply bg-primary/[0.12] text-primary`]: '',
          boxShadow: theme('elevation.1'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: ''
        }
      },

      '&-tonal': {
        [`@apply bg-secondary-container text-on-secondary-container`]: '',

        '&:hover': {
          ['@apply bg-secondary-container/[0.92] elevation-1']: ''
        },
        '&:focus': {
          ['@apply bg-secondary-container/[0.88]']: ''
        },
        '&:active': {
          ['@apply bg-secondary-container/[0.88]']: ''
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: ''
        }
      },
    },
  }
}