import { mixColor, MD3Color, Fonts } from "../../theming";


export const InputStyles = () => {
  return {
    '.text-field': {
      '--text-field-border-width': '1px',
      '--text-field-color': MD3Color('on-surface-variant'),
      '--text-field-bg-color': MD3Color('surface-container-highest'),
      '--text-field-border-color': MD3Color('on-surface-variant'),
      '--text-field-area-p-top': '8px',
      '--text-field-area-p-bottom': '8px',

      position: 'relative',
      display: 'inline-flex',
      width: 'fit-content',
      alignItems: 'center',
      alignSelf: 'stretch',
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
        padding: '8px 16px',
        paddingTop: 'var(--text-field-area-p-top)',
        paddingBottom: 'var(--text-field-area-p-bottom)',
      },

      '&-fill': {
        '--text-field-area-p-top': '24px',
        borderRadius: '4px 4px 0px 0px',

        // Float label if input is focused || input has value
        '&:not(:has(input:placeholder-shown)), &:has(input:focus)': {
          '.text-field-label': {
            ...Fonts['body-small'],
            top: '8px',
          },
        },

        '&:hover': {
          '--text-field-bg-color': mixColor('surface-variant', 'on-surface-variant', '8%'),
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
            ...Fonts['body-small'],
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
        ...Fonts['body-large'],
        background: 'transparent',
        outline: 'none',
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
        ...Fonts['body-large'],
        color: 'var(--text-field-color)',
        position: 'absolute',
        left: '12px',
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
      },
      '&-error:focus-within': {
        '--text-field-border-width': '2px',
      },
    }
  }
}