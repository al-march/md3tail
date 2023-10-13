import { Var, getColor } from "../utils";
import { PluginAPI } from "tailwindcss/types/config";

enum Vars {
  Color = '--md-button-color',
  Background = '--md-button-background',
  BorderWidth = '--md-button-border-width',
  BorderColor = '--md-button-border-color',
  BorderStyle = '--md-button-border-style',
  BorderRadius = '--md-button-border-radius',
}

export const IconButtonStyles = (api: PluginAPI) => {
  const MD3Color = getColor(api);

  return {
    '.icon-btn': {
      [Vars.Color]: MD3Color('on-surface'),
      [Vars.Background]: 'transparent',
      [Vars.BorderColor]: 'transparent',
      [Vars.BorderWidth]: '1px',
      [Vars.BorderStyle]: 'solid',
      [Vars.BorderRadius]: '100px',

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `calc(8px - ${Var(Vars.BorderWidth)})`,

      color: Var(Vars.Color),
      background: Var(Vars.Background),

      borderColor: Var(Vars.BorderColor),
      borderWidth: Var(Vars.BorderWidth),
      borderStyle: Var(Vars.BorderStyle),
      borderRadius: Var(Vars.BorderRadius),

      transition: '0.3s ease all',
      outline: 'none',

      '&:hover': {
        [Vars.Background]: MD3Color('on-surface-variant', '0.08'),
      },
      '&:active, &:focus': {
        [Vars.Background]: MD3Color('on-surface-variant', '0.12'),
      },

      '&-filled': {
        [Vars.Background]: MD3Color('primary'),
        [Vars.Color]: MD3Color('on-primary'),

        '&:hover': {
          [Vars.Background]: MD3Color('primary-hover'),
        },
        '&:focus, &:active': {
          [Vars.Background]: MD3Color('primary-focus'),
        },
      },

      '&-outlined': {
        [Vars.Color]: MD3Color('primary'),
        [Vars.Background]: 'transpatent',
        [Vars.BorderColor]: MD3Color('outline'),

        '&:hover': {
          [Vars.Background]: MD3Color('surface-hover'),
        },
        '&:focus': {
          [Vars.Background]: MD3Color('surface-focus'),
          [Vars.BorderColor]: MD3Color('primary'),
        },
        '&:active': {
          [Vars.Background]: MD3Color('surface-press'),
        },
        '&:disabled': {
          [Vars.BorderColor]: MD3Color('on-surface', '0.12'),
        }
      },

      '&-tonal': {
        [Vars.Background]: MD3Color('secondary-container'),
        [Vars.Color]: MD3Color('on-secondary-container'),

        '&:hover': {
          [Vars.Background]: MD3Color('secondary-container-hover'),
        },
        '&:focus, &:active': {
          [Vars.Background]: MD3Color('secondary-container-focus'),
        },
      },

      '&:disabled': {
        [Vars.Background]: 'transparent',
        [Vars.Color]: MD3Color('on-surface', '0.38'),
        cursor: 'not-allowed'
      },
    }
  };
};