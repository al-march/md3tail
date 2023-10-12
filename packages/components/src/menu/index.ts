import { PluginAPI } from "tailwindcss/types/config";
import { MenuStyles } from "./menu"

export const Menu = (api: PluginAPI) => {
  return {
    ...MenuStyles(api)
  }
}