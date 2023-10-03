import { MD3Mix, MD3Color, MD3Elevation, MD3Fonts } from "@md3-ui/theme";

export const FabStyles = () => {
  return {
    '.fab': {
      ...MD3Fonts['label-large'],
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      borderRadius: '16px',
      padding: '16px',
      transition: '0.3s ease all',

      boxShadow: MD3Elevation(3),
      background: MD3Color('surface-container-high'),
      color: MD3Color('primary'),
      outline: 'none',

      '&.fab-small': {
        borderRadius: '12px',
        padding: '8px',
      },

      '&.fab-large': {
        borderRadius: '28px',
        padding: '30px',
      },

      '&:hover': {
        boxShadow: MD3Elevation(4),
        background: MD3Mix('surface-container-high', 'primary', '8%'),
      },

      '&:focus, &:active': {
        boxShadow: MD3Elevation(4),
        background: MD3Mix('surface-container-high', 'primary', '12%'),
      },

      '&-primary': {
        background: MD3Color('primary-container'),
        color: MD3Color('on-primary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('primary-container', 'on-primary-container', '8%'),
        },
  
        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('primary-container', 'on-primary-container', '12%'),
        },
      },

      '&-secondary': {
        background: MD3Color('secondary-container'),
        color: MD3Color('on-secondary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('secondary-container', 'on-secondary-container', '8%'),
        },
  
        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('secondary-container', 'on-secondary-container', '12%'),
        },
      },

      '&-tertiary': {
        background: MD3Color('tertiary-container'),
        color: MD3Color('on-tertiary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('tertiary-container', 'on-tertiary-container', '8%'),
        },
  
        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('tertiary-container', 'on-tertiary-container', '12%'),
        },
      },

      '&-extended': {
        paddingLeft: '16px',
        paddingRight: '20px',
        paddingTop: '16px',
        paddingBottom: '16px',
        borderRadius: '16px',
      },


      '&:disabled': {
        boxShadow: MD3Elevation(0),
        background: MD3Color('surface-container-high', '0.38'),
        color: MD3Color('primary', '0.38'),
        cursor: 'not-allowed',
      }
    }
  }
}