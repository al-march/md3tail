import { PluginAPI } from "tailwindcss/types/config";
import { NavigationBarStyles } from "./navigation-bar";

export const Navigations = (api: PluginAPI) => {
  return {
    ...NavigationBarStyles(api),
  };
};