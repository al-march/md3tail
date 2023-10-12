import { ButtonStyles } from './button';
import { IconButtonStyles } from './icon-button';
import { FabStyles } from './fab'
import { PluginAPI } from 'tailwindcss/types/config';

export function Buttons(api: PluginAPI) {
  return {
    ...ButtonStyles(api),
    ...IconButtonStyles(api),
    ...FabStyles(api),
  };
}