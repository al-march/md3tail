import { PluginAPI } from 'tailwindcss/types/config';
import { ButtonStyles } from './button';
import { IconButtonStyles } from './icon-button';
import { FabStyles } from './fab';

export function Buttons(api: PluginAPI) {
  return {
    ...ButtonStyles(api),
    ...IconButtonStyles(api),
    ...FabStyles(api),
  };
}