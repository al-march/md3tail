import { getColor } from "../utils";
import { PluginAPI } from "tailwindcss/types/config";

export const IconButtonStyles = (api: PluginAPI) => {
  const MD3Color = getColor(api);

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
          background: MD3Color('primary-hover'),
        },
        '&:focus, &:active': {
          background: MD3Color('primary-focus'),
        },
      },

      '&-outlined': {
        border: '1px solid',
        borderColor: MD3Color('outline'),
        color: MD3Color('primary'),
        background: 'transpatent',

        '&:hover': {
          background: MD3Color('surface-hover'),
        },
        '&:focus': {
          background: MD3Color('surface-focus'),
          borderColor: MD3Color('primary'),
        },
        '&:active': {
          background: MD3Color('surface-press'),
        },
        '&:disabled': {
          border: `1px solid ${MD3Color('on-surface', '0.12')}`
        }
      },

      '&-tonal': {
        background: MD3Color('secondary-container'),
        color: MD3Color('on-secondary-container'),

        '&:hover': {
          background: MD3Color('secondary-container-hover'),
        },
        '&:focus, &:active': {
          background: MD3Color('secondary-container-focus'),
        },
      },

      '&:disabled': {
        background: 'transparent',
        color: MD3Color('on-surface', '0.38'),
        cursor: 'not-allowed'
      },
    }
  };
};