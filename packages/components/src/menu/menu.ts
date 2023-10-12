import { MD3Fonts, MD3Elevation } from "@md3-ui/theme";
import { getColor, getState } from "../utils";
import { PluginAPI } from "tailwindcss/types/config";

enum Vars {
  ItemColor = '--md-menu-item-color',
  ItemPadding = '--md-menu-item-padding',
}

const Var = (variable: Vars) => `var(${variable})`;

export const MenuStyles = (api: PluginAPI) => {
  const MD3Color = getColor(api);
  const MD3Mix = getState(api);

  return {
    '.md-menu': {
      [Vars.ItemColor]: 'transparent',
      [Vars.ItemPadding]: '16px 12px',

      background: MD3Color('surface-container'),
      color: MD3Color('on-surface'),
      boxShadow: MD3Elevation(2),
      display: 'inline-flex',
      flexDirection: 'column',
      padding: '8px 0',
      width: 'max-content',


      '&-item': {
        ...MD3Fonts['body-large'],
        padding: Var(Vars.ItemPadding),
        textAlign: 'left',
        border: 'none',
        outline: 'none',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '8px',
    
        background: Var(Vars.ItemColor),
        transition: 'background ease 0.2s',

        '&:hover': {
          [Vars.ItemColor]: MD3Mix('surface-container', 'on-surface', 'hover'),
        },

        '&:focus, &:active': {
          [Vars.ItemColor]: MD3Mix('surface-container', 'on-surface', 'focus'),
        },

        '&-label': {
          flex: '1',
        }
      }
    }
  }
}