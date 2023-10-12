import { MD3Elevation, MD3Fonts } from "@md3-ui/theme";
import { getColor, getState } from "../utils";
import { PluginAPI } from "tailwindcss/types/config";

export const FabStyles = (api: PluginAPI) => {
  const MD3Color = getColor(api);
  const MD3Mix = getState(api);

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
        background: MD3Mix('surface-container-high', 'primary', 'hover'),
      },

      '&:focus, &:active': {
        boxShadow: MD3Elevation(4),
        background: MD3Mix('surface-container-high', 'primary', 'focus'),
      },

      '&-primary': {
        background: MD3Color('primary-container'),
        color: MD3Color('on-primary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('primary-container', 'on-primary-container', 'hover'),
        },

        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('primary-container', 'on-primary-container', 'focus'),
        },
      },

      '&-secondary': {
        background: MD3Color('secondary-container'),
        color: MD3Color('on-secondary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('secondary-container', 'on-secondary-container', 'hover'),
        },

        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('secondary-container', 'on-secondary-container', 'focus'),
        },
      },

      '&-tertiary': {
        background: MD3Color('tertiary-container'),
        color: MD3Color('on-tertiary-container'),

        '&:hover': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('tertiary-container', 'on-tertiary-container', 'hover'),
        },

        '&:focus, &:active': {
          boxShadow: MD3Elevation(4),
          background: MD3Mix('tertiary-container', 'on-tertiary-container', 'focus'),
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
  };
};