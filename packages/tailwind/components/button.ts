import { PluginAPI } from "tailwindcss/types/config";


export const ButtonStyles = ({ theme }: PluginAPI) => {
  return {
    ".btn": {
      [`@apply transition-all text-primary bg-surface-container-high`]: {},
      padding: '0 24px',
      fontWeight: theme('fontWeight.medium'),
      borderRadius: '20px',
      lineHeight: '40px',

      '&-elevated': {
        boxShadow: theme('elevation.1'),
      },
      '&:hover': {
        [`@apply bg-primary-container`]: {},
        boxShadow: theme('elevation.2'),
      },
      '&:focus': {
        [`@apply bg-primary-container`]: {},
        boxShadow: theme('elevation.1'),
      },
      '&:active': {
        [`@apply bg-primary text-on-primary`]: {},
        boxShadow: theme('elevation.1'),
      },
    },
  }
}