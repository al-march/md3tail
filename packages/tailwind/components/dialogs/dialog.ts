import { MD3Color, Fonts } from "../../theming";

export const DialogStyles = () => {
  return {
    '.dialog': {
      background: 'transparent',
      boxSizing: 'border-box',

      '&::backdrop': {
        background: 'rgba(0, 0, 0, 0.4)',
      },

      '&-content': {
        ...Fonts['body-medium'],
        background: MD3Color('surface-container-high'),
        color: MD3Color('on-surface'),
        borderRadius: '28px',
        padding: '24px',
      },

      '&-title': {
        ...Fonts['headline-small'],
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