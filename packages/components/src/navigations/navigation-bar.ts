import { MD3Fonts } from "@md3tail/theme";
import { getColor, getState } from "../utils";
import { PluginAPI } from "tailwindcss/types/config";

enum NavigationBar {
  IconBg = '--md-navigation-bar-icon-bg',
  IconColor = '--md-navigation-bar-icon-color',
}

const Var = (variable: NavigationBar) => `var(${variable})`;

export const NavigationBarStyles = (api: PluginAPI) => {
  const MD3Color = getColor(api);
  const MD3Mix = getState(api);

  return {
    '.md-navigation-bar': {
      [NavigationBar.IconBg]: 'transparent',
      [NavigationBar.IconColor]: MD3Color('on-surface'),

      display: 'inline-flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'fit-content',
      padding: '0 8px',
      background: MD3Color('surface-container'),
      color: MD3Color('on-surface'),
      transition: '0.15s ease all',

      '&-button': {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12px',
        paddingBottom: '16px',
        gap: '4px',
        flex: '1',
        cursor: 'pointer',
        outline: 'none',
        background: 'transparent',

        '& > *': {
          cursor: 'pointer',
        },

        '&:hover': {
          [NavigationBar.IconBg]: MD3Color('on-surface', '0.08'),
          [NavigationBar.IconColor]: MD3Color('on-surface'),
        },

        '&:active, &:focus': {
          [NavigationBar.IconBg]: MD3Color('on-surface', '0.12'),
        },

        '&-active': {
          [NavigationBar.IconBg]: MD3Color('secondary-container'),
          [NavigationBar.IconColor]: MD3Color('on-secondary-container'),

          '&:hover': {
            [NavigationBar.IconBg]: MD3Mix('secondary-container', 'on-secondary-container', 'hover'),
          },

          '&:active, &:focus': {
            [NavigationBar.IconBg]: MD3Mix('secondary-container', 'on-secondary-container', 'focus'),
          },
        },

        '&-icon': {
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '16px',

          padding: '4px 20px',
          color: Var(NavigationBar.IconColor),
          background: Var(NavigationBar.IconBg),
          minHeight: '24px',
          minWidth: '24px',
          flex: '1',
          transition: '0.15s ease all',

          '&:not(:has(> *))': {
            '&:after': {
              content: `""`,
              display: 'block',
              width: '10px',
              height: '10px',
              borderRadius: '100px',
              background: MD3Color('on-secondary-container'),
            }
          }
        },

        '&-label': {
          ...MD3Fonts['label-medium']
        }
      }
    }
  };
};