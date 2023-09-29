import { MD3Mix, MD3Color, MD3Fonts } from "@md3-ui/theme";


export const InputStyles = () => {
  return {
    '.text-field': {
      '--text-field-border-width': '1px',
      '--text-field-color': MD3Color('on-surface-variant'),
      '--text-field-bg-color': MD3Color('surface-container-highest'),
      '--text-field-border-color': MD3Color('on-surface-variant'),
      '--text-field-area-support-color': MD3Color('on-surface-variant'),
      '--text-field-area-p-top': '8px',
      '--text-field-area-p-bottom': '8px',

      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      minWidth: '210px',

      transition: '0.15s ease all',
      marginBottom: '18px',
      background: 'var(--text-field-bg-color)',
      color: 'var(--text-field-color)',
      borderColor: 'var(--text-field-border-color)',
      outlineColor: 'var(--text-field-border-color)',

      '&:has(input[disabled])': {
        opacity: '0.38',
        cursor: 'not-allowed',

        '& *': {
          cursor: 'not-allowed',
        },
      },

      '&:focus-within:not(:has(&-input[disabled])):not(&-error)': {
        '--text-field-color': MD3Color('primary'),
        '--text-field-border-color': MD3Color('primary'),
        '--text-field-border-width': '2px',
      },

      '&-area': {
        position: 'relative',
        padding: '8px 0',
        height: '24px',
        paddingTop: 'var(--text-field-area-p-top)',
        paddingBottom: 'var(--text-field-area-p-bottom)',
        boxSizing: 'content-box',
        flex: '1',
        display: 'flex',
      },

      '&-fill': {
        '--text-field-area-p-top': '24px',
        borderRadius: '4px 4px 0px 0px',

        // Float label if input is focused || input has value
        '&:not(:has(input:placeholder-shown)), &:has(input:focus)': {
          '.text-field-label': {
            ...MD3Fonts['body-small'],
            top: '8px',
          },
        },

        '&:hover': {
          '--text-field-bg-color': MD3Mix('surface-variant', 'on-surface-variant', '8%'),
        },
      },

      '&-outline': {
        '--text-field-color': MD3Color('on-surface-variant'),
        '--text-field-bg-color': MD3Color('surface'),
        '--text-field-border-color': MD3Color('outline'),
        '--text-field-area-p-top': '16px',
        '--text-field-area-p-bottom': '16px',
        borderRadius: '4px',
        boxShadow: `0 0 0 var(--text-field-border-width) var(--text-field-border-color)`,

        '&:not(:has(input:placeholder-shown)), &:has(input:focus)': {
          '.text-field-label': {
            ...MD3Fonts['body-small'],
            top: '0px',
            transform: 'translateY(-50%)',
            background: MD3Color('surface'),
          },
        },

        '&:hover': {
          '--text-field-border-color': MD3Color('on-surface'),
          '--text-field-color': MD3Color('on-surface'),
        },
      },

      '&-input': {
        ...MD3Fonts['body-large'],
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: 'var(--text-field-area-p-bottom)',

        background: 'transparent',
        outline: 'none',
        width: '100%',
        color: MD3Color('on-surface-variant'),

        '&::placeholder': {
          opacity: '0',
        },

        '&:focus': {
          '&::placeholder': {
            opacity: '1',
          },
        },
      },

      '&-label': {
        ...MD3Fonts['body-large'],
        color: 'var(--text-field-color)',
        position: 'absolute',
        left: '0',
        top: '16px',
        transition: '0.15s ease all',
        padding: '0 4px',
      },

      '&-border': {
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        height: 'var(--text-field-border-width)',
        background: 'var(--text-field-border-color)',
        transition: '0.15s ease all',
      },

      '&-error, &-error:hover, &-error:focus-within': {
        '--text-field-border-color': MD3Color('error'),
        '--text-field-color': MD3Color('error'),
        '--text-field-area-support-color': MD3Color('error'),

        '.text-field-trailing': {
          color: MD3Color('error'),
        }
      },
      '&-error:focus-within': {
        '--text-field-border-width': '2px',
      },

      '&-support': {
        ...MD3Fonts['body-small'],
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',

        color: 'var(--text-field-area-support-color)',
        padding: '0 16px',
        transform: 'translateY(100%)',
      },

      '&-leading, &-trailing': {
        color: MD3Color('on-surface-variant'),
        display: 'inline-flex',
        padding: '8px',
      },
    },
  }
}