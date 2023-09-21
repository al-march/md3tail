import { mixColor, MD3Color, MD3Elevation, Fonts } from "../../theming";


export const InputStyles = () => {
  return {
    '.text-field': {
      position: 'relative',
      background: MD3Color('surface-container-highest'),
      color: MD3Color('on-surface-variant'),
      display: 'inline-flex',
      width: 'fit-content',
      padding: '8px 16px',
      alignItems: 'center',
      alignSelf: 'stretch',
      transition: '0.15s ease all',
      marginBottom: '18px',
      borderRadius: '4px 4px 0px 0px',

      '&:has(input[disabled])': {
        opacity: '0.38',
        cursor: 'not-allowed',

        '& > *': {
          cursor: 'not-allowed',
        },

        '&:hover': {
          background: MD3Color('surface-container-highest'),
        }
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

      '&:focus-within:not(:has(input[disabled]))': {
        '&:focus-within:not(.text-field-error)': {
          color: MD3Color('primary'),

          '.text-field-border': {
            background: MD3Color('primary'),
          }
        },

        '&:focus-within': {
          '.text-field-border': {
            height: '2px',
          }
        },
      },

      '&-input': {
        ...Fonts['body-large'],
        background: 'transparent',
        marginTop: '16px',
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
        left: '16px',
        top: '16px',
        transition: '0.15s ease all',
      },

      '&-border': {
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        height: '1px',
        background: MD3Color('on-surface-variant'),
        transition: '0.15s ease all',
      },

      '&-error': {
        '.text-field-border': {
          background: MD3Color('error'),
        },

        '.text-field-label': {
          color: MD3Color('error'),
        }
      }
    }
  }
}