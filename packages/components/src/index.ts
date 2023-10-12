import { Buttons } from './buttons';
import { Forms } from './forms';
import { Tabs } from './tabs';
import { Dialogs } from './dialogs';
import { Lists } from './lists';
import { Navigations } from './navigations';
import { Menu } from './menu';
import { Chips } from './chips';
import { PluginAPI } from 'tailwindcss/types/config';

export function Components(api: PluginAPI) {
  return {
    ...Buttons(api),
    ...Chips(api),
    ...Forms(api),
    ...Tabs(api),
    ...Dialogs(api),
    ...Lists(api),
    ...Navigations(api),
    ...Menu(api),
  };
}
