import { mixColor, MD3Color, Fonts } from "../../theming";


export const InputStyles = () => {
  return {
    '.text-field': {
      '--text-field-border-width': '1px',
      position: 'relative',
      display: 'inline-flex',
      width: 'fit-content',
      alignItems: 'center',
      alignSelf: 'stretch',
      transition: '0.15s ease all',
      marginBottom: '18px',

      '&:has(input[disabled])': {
        opacity: '0.38',
        cursor: 'not-allowed',

        '& *': {
          cursor: 'not-allowed',
        },
      },

      '&:focus-within:not(:has(input[disabled]))': {
        '&:focus-within:not(.text-field-error)': {
          color: MD3Color('primary'),
          borderColor: MD3Color('primary'),
          outlineColor: MD3Color('primary'),

          '.text-field-border': {
            background: MD3Color('primary'),
          }
        },

        '&:focus-within': {
          '--text-field-border-width': '2px',

          '&.text-field-outline:not(.text-field-error)': {
            boxShadow: `0 0 0 var(--text-field-border-width) ${MD3Color('primary')}`
          }
        },
      },

      '&-fill': {
        background: MD3Color('surface-container-highest'),
        color: MD3Color('on-surface-variant'),
        borderRadius: '4px 4px 0px 0px',

        '.text-field-area': {
          paddingTop: '24px'
        },

        // Float label if input is focused || input has value
        '&:not(:has(input:placeholder-shown)), &:has(input:focus)': {
          '.text-field-label': {
            ...Fonts['body-small'],
            top: '8px',
          },
        },

        '&:hover': {
          background: mixColor('surface-variant', 'on-surface-variant', '8%'),
        },
      },

      '&-outline': {
        borderRadius: '4px',
        boxShadow: `0 0 0 var(--text-field-border-width) ${MD3Color('outline')}`,
        background: MD3Color('surface'),
        color: MD3Color('on-surface-variant'),
        transform: 'translateZ(0)',

        '.text-field-area': {
          paddingTop: '16px',
          paddingBottom: '16px'
        },

        '&:not(:has(input:placeholder-shown)), &:has(input:focus)': {
          '.text-field-label': {
            ...Fonts['body-small'],
            top: '0px',
            transform: 'translateY(-50%)',
            background: MD3Color('surface'),
          },
        },

        '&:hover': {
          boxShadow: `0 0 0 var(--text-field-border-width) ${MD3Color('on-surface')}`,
          color: MD3Color('on-surface'),
        },
      },

      '&-area': {
        position: 'relative',
        padding: '8px 16px',
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
        background: MD3Color('on-surface-variant'),
        transition: '0.15s ease all',
      },

      '&-error': {
        borderColor: MD3Color('error'),
        outlineColor: MD3Color('error'),

        '&.text-field-outline': {
          boxShadow: `0 0 0 var(--text-field-border-width) ${MD3Color('error')}`,
        },

        '.text-field-border': {
          background: MD3Color('error'),
        },

        '.text-field-label': {
          color: MD3Color('error'),
        },

        '&:hover': {
          borderColor: MD3Color('error'),
          outlineColor: MD3Color('error'),
        }
      }
    }
  }
}