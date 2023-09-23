import { mixColor, MD3Color } from "../../theming";

export const IconButtonStyles = () => {
  return {
    '.icon-btn': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      border: 'none',
      borderRadius: '100px',
      transition: '0.3s ease all',
      outline: 'none',
      color: MD3Color('on-surface'),

      '&:hover': {
        background: MD3Color('on-surface-variant', '0.08'),
      },
      '&:active, &:focus': {
        background: MD3Color('on-surface-variant', '0.12'),
      },

      '&-filled': {
        background: MD3Color('primary'),
        color: MD3Color('on-primary'),

        '&:hover': {
          background: mixColor('primary', 'on-primary', '8%'),
        },
        '&:focus, &:active': {
          background: mixColor('primary', 'on-primary', '12%'),
        },
      },

      '&-outlined': {
        border: '1px solid',
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
          border: `1px solid ${MD3Color('on-surface', '0.12')}`
        }
      },

      '&-tonal': {
        background: MD3Color('secondary-container'),
        color: MD3Color('on-secondary-container'),

        '&:hover': {
          background: mixColor('secondary-container', 'on-secondary-container', '8%'),
        },
        '&:focus, &:active': {
          background: mixColor('secondary-container', 'on-secondary-container', '12%'),
        },
      },

      '&:disabled': {
        background: 'transparent',
        color: MD3Color('on-surface', '0.38'),
        cursor: 'not-allowed'
      },
    }
  }
}