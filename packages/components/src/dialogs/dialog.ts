import { MD3Color, MD3Fonts } from "@md3-ui/tailwind";

export const DialogStyles = () => {
  return {
    '.dialog': {
      background: 'transparent',
      boxSizing: 'border-box',

      '&::backdrop': {
        background: 'rgba(0, 0, 0, 0.4)',
      },

      '&-content': {
        ...MD3Fonts['body-medium'],
        background: MD3Color('surface-container-high'),
        color: MD3Color('on-surface'),
        borderRadius: '28px',
        padding: '24px',
      },

      '&-title': {
        ...MD3Fonts['headline-small'],
      },

      '&-actions': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0',

        '&-end': {
          justifyContent: 'end',
        }
      }
    }
  }
}