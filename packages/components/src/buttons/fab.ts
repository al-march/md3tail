import { MD3Elevation, MD3Fonts } from "@md3tail/theme";
import { Var, getColor, getState } from "../utils";
import { PluginAPI } from "tailwindcss/types/config";

enum Vars {
  Color = '--md-fab-color',
  Background = '--md-fab-background',
  BorderRadius = '--md-fab-border-radius',
  Shadow = '--md-fab-shadow',
  Cursor = '--md-fab-cursor',
}

export const FabStyles = (api: PluginAPI) => {
  const MD3Color = getColor(api);
  const MD3Mix = getState(api);

  return {
    '.fab': {
      [Vars.Color]: MD3Color('primary'),
      [Vars.Background]: MD3Color('surface-container-high'),
      [Vars.BorderRadius]: '16px',
      [Vars.Shadow]: MD3Elevation(3),
      [Vars.Cursor]: 'pointer',

      ...MD3Fonts['label-large'],
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      borderRadius: Var(Vars.BorderRadius),
      padding: '16px',
      transition: '0.3s ease all',

      boxShadow: Var(Vars.Shadow),
      background: Var(Vars.Background),
      color: Var(Vars.Color),
      cursor: Var(Vars.Cursor),
      outline: 'none',

      '&.fab-small': {
        [Vars.BorderRadius]: '12px',
        padding: '8px',
      },

      '&.fab-large': {
        [Vars.BorderRadius]: '28px',
        padding: '30px',
      },

      '&:hover, &:focus, &:active': {
        [Vars.Shadow]: MD3Elevation(4),
      },
      '&:hover': {
        [Vars.Background]: MD3Mix('surface-container-high', 'primary', 'hover'),
      },
      '&:focus': {
        [Vars.Background]: MD3Mix('surface-container-high', 'primary', 'focus'),
      },
      '&:active': {
        [Vars.Background]: MD3Mix('surface-container-high', 'primary', 'press'),
      },

      '&-primary': {
        [Vars.Background]: MD3Color('primary-container'),
        [Vars.Color]: MD3Color('on-primary-container'),
        '&:hover, &:focus, &:active': {
          [Vars.Shadow]: MD3Elevation(4),
        },
        '&:hover': {
          [Vars.Background]: MD3Color('primary-container-hover'),
        },
        '&:focus': {
          [Vars.Background]: MD3Color('primary-container-focus'),
        },
        '&:active': {
          [Vars.Background]: MD3Color('primary-container-press'),
        }
      },

      '&-secondary': {
        [Vars.Background]: MD3Color('secondary-container'),
        [Vars.Color]: MD3Color('on-secondary-container'),
        '&:hover, &:focus, &:active': {
          [Vars.Shadow]: MD3Elevation(4),
        },
        '&:hover': {
          [Vars.Background]: MD3Color('secondary-container-hover'),
        },
        '&:focus': {
          [Vars.Background]: MD3Color('secondary-container-focus'),
        },
        '&:active': {
          [Vars.Background]: MD3Color('secondary-container-press'),
        }
      },

      '&-tertiary': {
        [Vars.Background]: MD3Color('tertiary-container'),
        [Vars.Color]: MD3Color('on-tertiary-container'),
        '&:hover, &:focus, &:active': {
          [Vars.Shadow]: MD3Elevation(4),
        },
        '&:hover': {
          [Vars.Background]: MD3Color('tertiary-container-hover'),
        },
        '&:focus': {
          [Vars.Background]: MD3Color('tertiary-container-focus'),
        },
        '&:active': {
          [Vars.Background]: MD3Color('tertiary-container-press'),
        }
      },

      '&-extended': {
        paddingLeft: '16px',
        paddingRight: '20px',
        paddingTop: '16px',
        paddingBottom: '16px',
        borderRadius: '16px',
      },

      '&:disabled': {
        [Vars.Shadow]: MD3Elevation(0),
        [Vars.Background]: MD3Color('surface-container-high', '0.38'),
        [Vars.Color]: MD3Color('primary', '0.38'),
        [Vars.Cursor]: 'not-allowed',
      }
    }
  };
};