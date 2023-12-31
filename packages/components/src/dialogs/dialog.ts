import { MD3Fonts } from "@md3tail/theme";
import { getColor } from "../utils";
import { PluginAPI } from "tailwindcss/types/config";

export const DialogStyles = (api: PluginAPI) => {
  const MD3Color = getColor(api);

  return {
    '.dialog': {
      background: 'transparent',
      boxSizing: 'border-box',

      '&::backdrop': {
        background: 'rgba(0, 0, 0, 0.4)',
      },

      '&-content': {
        ...MD3Fonts['body-medium'],
        background: MD3Color('surface-container-high'),
        color: MD3Color('on-surface'),
        borderRadius: '28px',
        padding: '24px',
      },

      '&-title': {
        ...MD3Fonts['headline-small'],
      },

      '&-actions': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0',

        '&-end': {
          justifyContent: 'end',
        }
      }
    }
  };
};