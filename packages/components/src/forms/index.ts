import { InputStyles } from './input';
import { SwitcherStyles } from './switcher';
import { RadioStyles } from './radio';
import { CheckboxStyles } from './checkbox';
import { PluginAPI } from 'tailwindcss/types/config';

export const Forms = (api: PluginAPI) => {
  return {
    ...InputStyles(api),
    ...SwitcherStyles(api),
    ...RadioStyles(api),
    ...CheckboxStyles(api),
  }
}