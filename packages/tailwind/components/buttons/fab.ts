import { mixColor, MD3Color, MD3Elevation, Fonts } from "../../theming";

export const FabStyles = () => {
  return {
    '.fab': {
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

      '& > *': {
        fontSize: '24',
      },

      '&.fab-small': {
        borderRadius: '12px',
        padding: '8px',
        '& > *': {
          fontSize: '24',
        }
      },

      '&.fab-large': {
        borderRadius: '28px',
        padding: '30px',
        '& > *': {
          fontSize: '36px',
        }
      },

      '&:hover': {
        boxShadow: MD3Elevation(4),
        background: mixColor('surface-container-high', 'primary', '8%'),
      },

      '&:focus, &:active': {
        boxShadow: MD3Elevation(4),
        background: mixColor('surface-container-high', 'primary', '12%'),
      },

      '&-primary': {
        background: MD3Color('primary-container'),
        color: MD3Color('on-primary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: mixColor('primary-container', 'on-primary-container', '8%'),
        },
  
        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: mixColor('primary-container', 'on-primary-container', '12%'),
        },
      },

      '&-secondary': {
        background: MD3Color('secondary-container'),
        color: MD3Color('on-secondary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: mixColor('secondary-container', 'on-secondary-container', '8%'),
        },
  
        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: mixColor('secondary-container', 'on-secondary-container', '12%'),
        },
      },

      '&-tertiary': {
        background: MD3Color('tertiary-container'),
        color: MD3Color('on-tertiary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: mixColor('tertiary-container', 'on-tertiary-container', '8%'),
        },
  
        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: mixColor('tertiary-container', 'on-tertiary-container', '12%'),
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