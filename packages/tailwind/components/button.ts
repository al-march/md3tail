import { PluginAPI } from "tailwindcss/types/config";


export const ButtonStyles = ({ theme }: PluginAPI) => {
  return {
    ".btn": {
      [`@apply transition-all`]: {},
      padding: '0 24px',
      fontWeight: theme('fontWeight.medium'),
      borderRadius: '20px',
      backgroundColor: theme('colors.md-sys-color-surface'),
      lineHeight: '40px',
      color: theme('colors.md-sys-color-primary'),

      '&-elevated': {
        boxShadow: theme('elevation.1'),
      },

      '&:hover': {
        [`@apply bg-md-sys-color-primary-container/[0.92]`]: {},
        boxShadow: theme('elevation.2'),
      },
      '&:focus': {
        [`@apply bg-md-sys-color-primary-container/[0.88]`]: {},
        boxShadow: theme('elevation.1'),
      },
      '&:active': {
        [`@apply bg-md-sys-color-primary-container/[0.88]`]: {},
        boxShadow: theme('elevation.1'),
      },
    },
  }
}