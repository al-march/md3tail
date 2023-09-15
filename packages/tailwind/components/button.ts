import { PluginAPI } from "tailwindcss/types/config";


export const ButtonStyles = ({ theme }: PluginAPI) => {
  return {
    ".btn": {
      [`@apply transition-all text-primary`]: {},
      padding: '0 24px',
      fontWeight: theme('fontWeight.medium'),
      borderRadius: '20px',
      backgroundColor: theme('surface'),
      lineHeight: '40px',

      '&-elevated': {
        boxShadow: theme('elevation.1'),
      },
      '&:hover': {
        [`@apply bg-primaryContainer/[0.92]`]: {},
        boxShadow: theme('elevation.2'),
      },
      '&:focus': {
        [`@apply bg-primaryContainer/[0.88]`]: {},
        boxShadow: theme('elevation.1'),
      },
      '&:active': {
        [`@apply bg-primaryContainer/[0.88]`]: {},
        boxShadow: theme('elevation.1'),
      },
    },
  }
}