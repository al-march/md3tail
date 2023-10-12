import { PluginAPI } from 'tailwindcss/types/config';
import { TabsStyles } from './Tabs';

export const Tabs = (api: PluginAPI) => {
  return {
    ...TabsStyles(api)
  }
}