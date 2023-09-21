import { mixColor, MD3Color, MD3Elevation, Fonts } from "../../theming";

export const ButtonStyles = () => {
  return {
    ".btn": {
      ...Fonts['label-large'],
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0 24px',
      borderRadius: '20px',
      lineHeight: '40px',
      transition: '0.3s ease all',


      '&-with-icon': {
        paddingLeft: '16px',
        '&:has(> *:only-child)': {
          paddingRight: '16px'
        },
      },

      '&-filled': {
        background: MD3Color('primary'),
        color: MD3Color('on-primary'),

        '&:hover': {
          background: mixColor('primary', 'on-primary', '8%'),
          boxShadow: MD3Elevation(1),
        },
        '&:focus': {
          background: mixColor('primary', 'on-primary', '12%'),
        },
        '&:active': {
          background: mixColor('primary', 'on-primary', '12%'),
        },
        '&:disabled': {
          background: MD3Color('on-surface', '0.12'),
          color: MD3Color('on-surface', '0.38'),
          boxShadow: 'none',
          cursor: 'not-allowed'
        }
      },

      '&-text': {
        color: MD3Color('primary'),

        '&:hover': {
          background: mixColor('surface-container-low', 'primary', '8%'),
        },
        '&:focus': {
          background: mixColor('surface-container-low', 'primary', '12%'),
        },
        '&:active': {
          background: mixColor('surface-container-low', 'primary', '12%'),
        },
        '&:disabled': {
          ['@apply bg-transparent text-on-surface text-opacity-[0.38]']: '',
          ['@apply cursor-not-allowed']: ''
        }
      },

      '&-outlined': {
        borderRadius: '100px',
        borderWidth: '1px',
        borderColor: MD3Color('outline'),
        color: MD3Color('primary'),
        background: 'transpatent',

        '&:hover': {
          background: mixColor('surface-container-low', 'primary', '8%'),
        },
        '&:focus': {
          background: mixColor('surface-container-low', 'primary', '12%'),
          borderColor: MD3Color('primary'),
        },
        '&:active': {
          background: mixColor('surface-container-low', 'primary', '12%'),
        },
        '&:disabled': {
          background: 'transparent',
          color: MD3Color('on-surface', '0.38'),
          boxShadow: 'none',
          cursor: 'not-allowed',
          border: `1px solid ${MD3Color('on-surface', '0.12')}`
        }
      },

      '&-elevated': {
        boxShadow: MD3Elevation(1),
        background: MD3Color('surface-container-low'),
        color: MD3Color('primary'),

        '&:hover': {
          background: mixColor('surface-container-low', 'primary', '8%'),
          boxShadow: MD3Elevation(2),
        },
        '&:focus': {
          background: mixColor('surface-container-low', 'primary', '12%'),
          boxShadow: MD3Elevation(1),
        },
        '&:active': {
          background: mixColor('surface-container-low', 'primary', '12%'),
          boxShadow: MD3Elevation(1),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: ''
        }
      },

      '&-tonal': {
        ['@apply bg-secondary-container text-on-secondary-container']: '',
        '&:hover': {
          ['@apply elevation-1']: '',
          background: mixColor('secondary-container', 'on-secondary-container', '8%'),
        },
        '&:focus': {
          background: mixColor('secondary-container', 'on-secondary-container', '12%'),
        },
        '&:active': {
          background: mixColor('secondary-container', 'on-secondary-container', '12%'),
        },
        '&:disabled': {
          ['@apply bg-on-surface bg-opacity-[0.12] text-on-surface text-opacity-[0.38]']: '',
          ['@apply elevation-0 cursor-not-allowed']: '',
        }
      }
    },
  };
}